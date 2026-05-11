# [API Reference](https://docs.generect.com/api-reference/introduction)

# Реструктуризація API

Глобально \- правимо лише url, та input. змінений output @andrii.kolpakov ще дизайнить

## **Бізнес-ціль**

Реструктуризація API для досягнення трьох ключових цілей:

---

### **1\. Preview API для SaaS платформ (FREE tier)**

**Проблема:** SaaS платформи (Clay, n8n, AI SDR tools) не можуть показувати результати пошуку своїм користувачам без витрат на кожен показ.

**Рішення:** Preview endpoint повертає masked дані (без linkedin\_url, domain, email) \+ внутрішній `lead_id`. По цьому ID можна потім отримати email, phone, або повний профіль.

**Бізнес-імпакт:**

* Залучення SaaS платформ як клієнтів ($2000+/month отримують Preview безкоштовно)  
* Модель "показав безкоштовно → заплатив за reveal" збільшує конверсію

### **2\. Database vs Realtime розділення**

**Проблема:** Поточні endpoints змішують режими через flags (`up_to_the_second_fresh`, `cached`, `without_company`). Це заплутує користувачів і ускладнює документацію.

**Рішення:** Окремі endpoints:

* `/search/database/leads/` \- швидко, дешево, обмежені фільтри  
* `/search/realtime/leads/` \- повільніше, дорожче, повні LinkedIn фільтри

**Бізнес-імпакт:**

* Чітка документація \= менше support запитів  
* Користувачі розуміють за що платять  
* Можливість різного pricing для database vs realtime

### **3\. "No Data, No Charge" модель**

**Проблема:** Конкуренти (Apollo, ZoomInfo) беруть кредити навіть коли email не знайдено.

**Рішення:** Charge тільки за валідні результати:

* Email not found → 0 credits  
* Phone not found → 0 credits  
* Lead not in database → 0 credits (але тут будемо шукати в real-time \- не знайшли \- не чарджимо)

**Бізнес-імпакт:**

* Швидша та зрозуміліша інтеграція  
* Більша кількість покриття юзкейсів  
* Відсутність згадок linkedin в юрл

## **Нова структура API**

Base URL: generect.com/api/v1/

├── PREVIEW (Database only \- FREE tier)  
│   ├── POST /preview/leads/  
│   └── POST /preview/leads/count/

├── SEARCH  
│   ├── /search/database/  
│   │   ├── POST /search/database/company-leads/  
│   │   ├── POST /search/database/company-leads/count/ \# FREE  
│   │   ├── POST /search/database/leads/  
│   │   ├── POST /search/database/leads/count/  
│   │   ├── POST /search/database/companies/  
│   │   └── POST /search/database/companies/count/ \# FREE  
│   │  
│   └── /search/realtime/  
│       ├── POST /search/realtime/company-leads/  
│       ├── POST /search/realtime/company-leads/count/ \# ??  
│       ├── POST /search/realtime/leads/  
│       ├── POST /search/realtime/leads/count/ \# 1 credit  
│       ├── POST /search/realtime/companies/  
│       └── POST /search/realtime/companies/count/ \# 1 credit

├── ENRICH  
│   ├── /enrich/database/  
│   │   ├── POST /enrich/database/lead/ (??.email finder/phone finder)  
│   │   └── POST /enrich/database/company/ (website, name, linkedin url)  
│   │  
│   └── /enrich/realtime/  
│       ├── POST /enrich/realtime/lead/ \+ reverse email search  
│       └── POST /enrich/realtime/company/

├── EMAIL  
│   ├── POST /email/find/                      
│   ├── POST /email/find/bulk/  
│   ├── GET  /email/find/bulk/{job\_id}/  
│   └── POST /email/validate/              

├── PHONE                                     
│   ├── POST /phone/find/  
│   ├── POST /phone/find/bulk/  
│   └── GET  /phone/find/bulk/{job\_id}/

├── WEBHOOKS                                  
│   └── ...

└── ACCOUNTS  
    ├── GET /accounts/me/  
    ├── GET /accounts/usage/  
    └── GET /accounts/transactions/

## **✅ PREVIEW API \- masked lead search для SaaS платформ**

### Бізнес-ціль

Preview API дозволяє SaaS платформам показувати результати пошуку користувачам безкоштовно, а потім charge за reveal конкретних даних (email, phone, full profile).  
Модель: Preview FREE → Reveal PAID

### Endpoints

POST /preview/leads/  
Пошук лідів з masked даними \+ внутрішнім lead\_id  
POST /preview/leads/count/  
Підрахунок кількості (завжди FREE)

### Що повертає Preview (masked)

| Поле | Preview | Після Enrich |
| :---- | :---- | :---- |
| id | ✅ lead\_abc123 | ✅ |
| first\_name | ✅ "John" | ✅ |
| last\_name | ✅ "Doe" | ✅ |
| title | ✅ "CEO" | ✅ |
| company\_name | ✅ "Acme Tech" | ✅ |
| company\_domain | ❌ | ✅ "[acme.com](http://acme.com)" |
| linkedin\_url | ❌ | ✅ [linkedin.com/in/urn…](http://linkedin.com/in/urn%E2%80%A6) |
| location | ✅ "San Francisco, CA" | ✅ |
| industry | ✅ "Software" | ✅ |
| seniority | ✅ "CXO" | ✅ |
| headcount\_range | ✅ "51-200" | ✅ |

### Що можна зробити з lead\_id

| Дія | Endpoint |  |
| :---- | :---- | :---- |
| Get Email | POST /email/find/ { lead\_id } |  |
| Get Phone | POST /phone/find/ { lead\_id } |  |
| Full Profile | POST /enrich/database/lead/ { id } |  |
| Fresh Profile | POST /enrich/realtime/lead/ { id } |  |

### Pricing

* $2000+/month accounts: FREE unlimited  
* Other accounts: 0.002 credit/result  
* Count: завжди FREE

### Технічні деталі

* Працює тільки з database (не realtime)  
* Фільтри: job\_titles, seniorities, locations, company\_industries, company\_headcount  
* Pagination: page, per\_page (max 100\)

### Mapping з поточних endpoints

Базується на логіці GET /api/linkedin/companies\_leads/{id}/cached/ але окремий endpoint з masked response.

### Acceptance Criteria

* Endpoint POST /preview/leads/ працює  
* Endpoint POST /preview/leads/count/ працює  
* Response містить id для кожного lead \- (мабуть id з нашої бази, @andrii.kolpakov також пропоную використовувати цей id і для пошуку по /search (вкажу це в відповідну задачу), щоб по тим id можна було запускати email finder/phone finder. В майбутньому ми такий email finder зможемо зробити точнішим ніж за first \+ last \+ domain, бо 1 у нас в базі вже буде пошта, 2 ми зможемо використовувати middle name та raw форматування, а не те що нам кине юзер)  
* Response НЕ містить: linkedin\_url, company\_domain, email, phone  
* Pricing logic: FREE для $2000+/month, інакше 0.001/result  
* Count завжди FREE

## **❌ SEARCH API \- розділення на database/realtime endpoints**

### Бізнес-ціль

Замість поточних flags (`up_to_the_second_fresh`, `cached`, `without_company`) \- чіткі окремі endpoints для database та realtime режимів.

**Переваги:**

* Користувачі розуміють за що платять  
* Простіша документація  
* Можливість різного pricing

### Нові Endpoints

#### Database Mode (швидко, дешево, обмежені фільтри)

POST /search/database/leads/  
POST /search/database/leads/count/          \# FREE  
POST /search/database/companies/  
POST /search/database/companies/count/      \# FREE  
POST /search/database/company-leads/  
POST /search/database/company-leads/count/  \# FREE

#### Realtime Mode (повільніше, дорожче, повні LinkedIn фільтри)

POST /search/realtime/leads/  
POST /search/realtime/leads/count/  
POST /search/realtime/companies/  
POST /search/realtime/companies/count/  
POST /search/realtime/company-leads/  
POST /search/realtime/company-leads/count/

### Database vs Realtime

| Аспект | Database | Realtime |
| ----- | ----- | ----- |
| Джерело | Generect cache | Internet |
| Швидкість | \< 1 сек | 5-60 сек |
| Freshness | До 30 днів | Актуальні |
| Ціна | 0.1 credit/result | 1 credit/result |

### Фільтри по режимах

#### Lead Filters

| Фільтр | Database | Realtime |
| ----- | ----- | ----- |
| job\_titles | ✅ | ✅ |
| seniorities | ✅ | ✅ |
| locations | ✅ | ✅ |
| company\_industries | ✅ | ✅ |
| company\_headcount | ✅ | ✅ |
| keywords | ❌ | ✅ |
| personas | ❌ | ✅ |
| past\_companies | ❌ | ✅ |
| schools | ❌ | ✅ |
| groups | ❌ | ✅ |
| years\_in\_position | ❌ | ✅ |
| functions | ❌ | ✅ |

#### Company Filters

| Фільтр | Database | Realtime |
| ----- | ----- | ----- |
| industries | ✅ | ✅ |
| headcount | ✅ | ✅ |
| locations | ✅ | ✅ |
| company\_types | ✅ | ✅ |
| keywords | ❌ | ✅ |
| revenue\_range | ❌ | ✅ |

### Mapping з поточних endpoints

| Поточний | Новий |
| ----- | ----- |
| `POST /api/linkedin/leads/by_icp/` (up to the second fresh: true) | `/search/realtime/leads/` |
| `POST /api/linkedin/leads/by_icp/` | `/search/database/leads/` |
| `GET /api/linkedin/leads/by_icp/get_count/` | `/search/realtime/leads/count/` |
| `POST /api/linkedin/companies/by_icp/` (up to the second fresh: true) | `/search/realtime/companies/` |
| `POST /api/linkedin/companies_leads/` | `/search/realtime/company-leads/` |

### Response Format

Search endpoints повертають **повні дані** (не masked як Preview):

* linkedin\_url ✅  
* company\_domain ✅  
* full last\_name ✅

### Acceptance Criteria

* Database endpoints працюють з обмеженими фільтрами  
* Realtime endpoints працюють з повними LinkedIn фільтрами  
* Count endpoints: database FREE, realtime charged  
* Pricing: в таблиці pricing на [beta.generect.com](http://beta.generect.com) \-\> api \-\> pricing  
* Company-leads combo endpoint працює в обох режимах  
* Response містить повні дані (не masked)

## **✅ ENRICH API \- unified enrich by ID або external identifier**

### Бізнес-ціль

Unified Enrich endpoint приймає різні типи input:

* **Internal ID** (з Preview/Search) \- найшвидший спосіб  
* **LinkedIn URL** \- класичний спосіб  
* **Email** \- reverse email lookup  
* **Name \+ Company** \- fuzzy matching

Це спрощує інтеграцію: один endpoint замість кількох.

### Endpoints

#### Database Mode (швидко, з cache)

POST /enrich/database/lead/

POST /enrich/database/company/

#### Realtime Mode (свіжі дані з LinkedIn)

POST /enrich/realtime/lead/      \+ reverse email search

POST /enrich/realtime/company/

### Input Options (provide ONE)

#### Lead Enrich

// Option 1: By internal ID (from Preview/Search)

{ "id": "lead\_abc123xyz" }

// Option 2: By LinkedIn URL

{ "linkedin\_url": "https://linkedin.com/in/johndoe" }

// Option 3: By email (reverse lookup)

{ "email": "john@acme.com" }

By email \- [https://github.com/generect/api\_parser/pull/1828](https://github.com/generect/api_parser/pull/1828) \- лише частину single lead enrichment,

#### Company Enrich

// Option 1: By internal ID

{ "id": "comp\_xyz789" }

// Option 2: By domain

{ "domain": "acme.com" }

// Option 3: By LinkedIn URL

{ "linkedin\_url": "https://linkedin.com/company/acme" }

// Option 4: By name

{ "name": "Acme Technologies" }

### Response \- Full Lead Profile

{

  "id": "lead\_abc123xyz",

  "first\_name": "John",

  "last\_name": "Doe",

  "title": "CEO",

  "headline": "CEO at Acme | Building...",

  "linkedin\_url": "https://linkedin.com/in/johndoe",

  "location": "San Francisco, CA",

  "seniority": "CXO",

  "company": {

    "id": "comp\_def456",

    "name": "Acme Technologies",

    "domain": "acmetech.com",

    "linkedin\_url": "...",

    "industry": "Software",

    "headcount": 150

  },

  "work\_history": \[...\],

  "education": \[...\],

  "skills": \[...\]

}

### Pricing

**"No Data, No Charge":** якщо lead/company не знайдено → 0 credits

### Mapping з поточних endpoints

| Поточний | Новий |
| ----- | ----- |
| `POST /api/linkedin/leads/by_link/` (fresh=false) | `/enrich/database/lead/` |
| `POST /api/linkedin/leads/by_link/` (fresh=true) | `/enrich/realtime/lead/` |
| `POST /api/linkedin/companies/by_link/` (cached=true) | `/enrich/database/company/` |
| `POST /api/linkedin/companies/by_link/` (cached=false) | `/enrich/realtime/company/` |

### Acceptance Criteria

* Database lead enrich працює по: id, linkedin\_url, email, name+company  
* Realtime lead enrich працює по: id, linkedin\_url, email, name+company  
* Database company enrich працює по: id, domain, linkedin\_url, name  
* Realtime company enrich працює по: id, domain, linkedin\_url, name  
* Reverse email lookup інтегровано в realtime lead enrich  
* "No Data, No Charge" \- якщо не знайдено, 0 credits  
* Response містить повний профіль (work\_history, education, skills)

## 

## **✅ EMAIL API \- find by lead\_id \+ validate endpoint**

### Бізнес-ціль

Email API з двома ключовими фічами:

1. **Find by lead\_id** \- швидкий reveal email для лідів з Preview  
2. **"No Data, No Charge"** \- charge тільки якщо знайдено валідний email

### Endpoints

POST /email/find/              \# find email by lead\_id OR name+domain  
POST /email/find/bulk/         \# bulk async  
GET  /email/find/bulk/{job\_id}/  
POST /email/validate/          \# validate email

### POST /email/find/

#### Input Options

// Option 1: By lead\_id (from Preview) \- RECOMMENDED  
{ "lead\_id": "lead\_abc123xyz" }

// Option 2: By name \+ domain (classic)  
{  
  "first\_name": "John",  
  "last\_name": "Doe",  
  "domain": "acme.com",  
}

#### Response \- Found

{  
  "data": {  
    "lead\_id": "lead\_abc123xyz",  
    "email": {  
      "address": "john.doe@acme.com",  
      "status": "VALID",  
      "confidence": 0.95,  
      "type": "work",  
      "pattern": "first.last",  
      "verification": {  
        "mx\_valid": true,  
        "smtp\_check": true,  
        "is\_catch\_all": false  
      }  
    }  
  },  
  "meta": {  
    "credits\_charged": 1  
  }  
}

#### Response \- Not Found

{  
  "data": {  
    "lead\_id": "lead\_abc123xyz",  
    "email": {  
      "address": null,  
      "status": "NOT\_FOUND"  
    }  
  },  
  "meta": {  
    "credits\_charged": 0  // NO CHARGE\!  
  }  
}

### POST /email/validate/

Валідація email адрес

#### Request

{  
  "emails": \["john@acme.com", "jane@corp.io"\]  
}

#### Response

{  
  "data": {  
    "results": \[  
      {  
        "email": "john@acme.com",  
        "status": "VALID",  
        "is\_deliverable": true,  
        "is\_catch\_all": false,  
        "is\_disposable": false,  
        "risk\_score": 0.1  
      }  
    \]  
  },  
  "meta": {  
    "credits\_charged": 1  
  }  
}

### Pricing

| Endpoint | Cost | Condition |
| ----- | ----- | ----- |
| /email/find/ | Charged only for successful results   | If VALID email found |
| /email/find/ | 0 credits | If not found |
| /email/validate/ | 1 credit | Per validation |
| /email/find/bulk/ | 1 credit/valid | Per valid email |

### Email Statuses

* `VALID` \- deliverable, safe to send  
* `RISKY` \- catch-all or uncertain  
* `CATCH_ALL` \- domain accepts all  
* `INVALID` \- bounces  
* `NOT_FOUND` \- couldn't find

### Mapping з поточних endpoints

| Поточний | Новий |
| ----- | ----- |
| `POST /api/linkedin/email_finder/` | `/email/find/` |
| `POST /api/linkedin/email_validator/` | `/email/validate/` |

### Acceptance Criteria

* `/email/find/` працює по lead\_id  
* `/email/find/` працює по name+domain  
* `/email/find/` повертає lead\_id в response  
* "No Data, No Charge" \- 0 credits якщо не знайдено  
* `/email/validate/`  
* Bulk endpoints працюють async  
* Email statuses: VALID, RISKY, CATCH\_ALL, INVALID, NOT\_FOUND

## **❌ PHONE API \- find phone by lead\_id**

### Бізнес-ціль

Phone API з "No Data, No Charge" моделлю \- charge тільки якщо знайдено телефон.

### Endpoints

POST /phone/find/              \# find phone by lead\_id OR name+company

POST /phone/find/bulk/         \# bulk async

GET  /phone/find/bulk/{job\_id}/

### POST /phone/find/

#### Input Options

// Option 1: By lead\_id (from Preview)

{ "lead\_id": "lead\_abc123xyz" }

// Option 2: By name \+ company

{

  "first\_name": "John",

  "last\_name": "Doe",

  "company": "acme.com",

  "linkedin\_url": "..." // optional

}

#### Response \- Found

{

  "data": {

    "lead\_id": "lead\_abc123xyz",

    "phone": {

      "number": "+1-555-123-4567",

      "type": "mobile",

      "country": "US",

      "status": "FOUND"

    }

  },

  "meta": {

    "credits\_charged": 5

  }

}

#### Response \- Not Found

{

  "data": {

    "lead\_id": "lead\_abc123xyz",

    "phone": {

      "number": null,

      "status": "NOT\_FOUND"

    }

  },

  "meta": {

    "credits\_charged": 0  // NO CHARGE\!

  }

}

### Pricing

| Endpoint | Cost | Condition |
| ----- | ----- | ----- |
| /phone/find/ | Charged only for successful results  | If phone found |
| /phone/find/ | 0 credits | If not found |
| /phone/find/bulk/ | Charged only for successful results  | Per found phone |

### Acceptance Criteria

* `/phone/find/` працює по lead\_id  
* `/phone/find/` працює по name+company  
* "No Data, No Charge" \- 0 credits якщо не знайдено  
* Bulk endpoints працюють async

## **❌ WEBHOOKS API \- async notifications**

### Бізнес-ціль

Webhooks для notification про завершення async операцій (bulk email find, bulk enrich, etc).

### Endpoints

POST   /webhooks/           \# Register webhook

GET    /webhooks/           \# List webhooks

DELETE /webhooks/{id}/      \# Remove webhook

POST   /webhooks/test/      \# Test delivery

### POST /webhooks/ \- Register

{

  "url": "https://your-app.com/webhook",

  "events": \["email.find.completed", "enrich.completed"\],

  "secret": "your-secret-for-signature"

}

### Webhook Events

| Event | Trigger |
| ----- | ----- |
| `email.find.completed` | Bulk email find job done |
| `email.find.bulk.completed` | Bulk email find done |
| `phone.find.bulk.completed` | Bulk phone find done |
| `enrich.bulk.completed` | Bulk enrich done |

### Webhook Payload

{

  "event": "email.find.bulk.completed",

  "timestamp": "2024-01-15T10:30:00Z",

  "data": {

    "job\_id": "job\_123",

    "status": "completed",

    "total": 100,

    "found": 85,

    "not\_found": 15

  }

}

### Security

* HMAC signature in `X-Webhook-Signature` header  
* Retry logic: 5 attempts, exponential backoff  
* Timeout: 30 seconds

### Acceptance Criteria

* Webhook registration працює  
* Webhook delivery з signature  
* Retry logic при failures  
* Test endpoint для перевірки

## **✅ ACCOUNT API \- restructure account endpoints**

### Бізнес-ціль

Консолідація account endpoints під єдиним namespace `/api/accounts/`.

### Endpoints

GET /accounts/me/              \# Profile \+ credits balance (old user me)  
GET /accounts/usage/           \# Usage statistics (old spent\_credits)  
GET /accounts/transactions/    \# Transaction history (old transactions)

### GET /accounts/me/

Повертає профіль користувача та баланс кредитів.

{  
  "data": {  
    "id": "user\_123",  
    "email": "user@company.com",  
    "name": "John Doe",  
    "company": "Acme Inc",  
    "plan": "Pro",  
    "credits": {  
      "balance": 5000,  
      "used\_this\_month": 1234,  
      "monthly\_limit": 10000  
    },  
    "preview\_tier": true  // $2000+/month \= FREE preview  
  }  
}

### GET /accounts/usage/

Статистика використання (раніше `/spent_credits`).

{  
  "data": {  
    "period": "2024-01",  
    "total\_credits": 1234,  
    "breakdown": {  
      "search\_database": 500,  
      "search\_realtime": 200,  
      "enrich\_database": 300,  
      "enrich\_realtime": 100,  
      "email\_find": 134  
    }  
  }  
}

### GET /accounts/transactions/

Історія транзакцій.

{  
  "data": {  
    "transactions": \[  
      {  
        "id": "txn\_123",  
        "timestamp": "2024-01-15T10:30:00Z",  
        "type": "search\_database\_leads",  
        "credits": \-25,  
        "details": {  
          "results\_count": 250  
        }  
      }  
    \]  
  }  
}

### Mapping з поточних endpoints

| Поточний | Новий |
| ----- | ----- |
| `GET /api/auth/users/me/` | `/accounts/me/` |
| `GET /api/auth/transactions/spent_credits/` | `/accounts/usage/` |
| `GET /api/auth/transactions/` | `/accounts/transactions/` |

### Acceptance Criteria

* `/accounts/me/` повертає профіль \+ credits  
* `/accounts/me/` включає `preview_tier` flag  
* `/accounts/usage/` повертає breakdown по типах операцій  
* `/accounts/transactions/` повертає історію  
* Старі endpoints працюють (backward compatibility) або redirect

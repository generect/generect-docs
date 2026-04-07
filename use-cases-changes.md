## Структура на сторінці [Use Cases & Best Practices](http://95.216.9.205:3001/use-cases/finding-newborn-founders)

![][image1]

### SaaS

Leads search (Всередині 3-5 юзкейсів)  
Company search (Всередині 3-5 юзкейсів)  
Verify emails (Всередині 3-5 юзкейсів)  
Find contacts (Всередині 3-5 юзкейсів)

### API 

Data Discovery  
1\. SaaS-платформа показує результати пошуку своїм користувачам без витрат(Preview)  
2\. Масовий пошук лідів за ICP з кешованої бази (Search API \- Database)  
3\. Пошук лідів в реальному часі з розширеними фільтрами (Search API \- Realtime)  
4\. Пошук компаній та їх контактних осіб в одному запиті (Search API)  
5\. Швидка оцінка розміру аудиторії перед запуском кампанії (Preview API)

Data Enrichment  
1\. Reveal повного профілю ліда після Preview (Enrich API)  
2\. Reverse email lookup — знайти людину за email (Enrich API)  
3\. Збагачення компанії за доменом або назвою (Enrich API)  
4\. Знайти робочий email за lead\_id після Preview (Email API)  
5\. Знайти мобільний номер ліда для cold calling (Phone API)

Bulk Processing  
1\. Bulk email find для великих списків (Email API)  
2\. Валідація email-списку перед розсилкою (Email API)  
3\. Bulk phone find для команд з великими списками (Phone API)  
4\. AI-агент фільтрує релевантних лідів перед витратою кредитів (Preview API)

Automations & Integrations \- тут і CRM і боти  
1\. AI-агент автоматично обробляє нові ліди від початку до кінця  
2\. No-code automation: новий сайнап → збагачення → CRM  
3\. Generect як data source для outreach платформ  
4\. Доповнити CRM-контакти телефонами для Customer Success

Account Management  
1\. Моніторинг балансу кредитів в реальному часі(Account API)  
2\. Аналітика використання API по типах операцій (Account API)  
3\. Історія транзакцій для фінансової звітності (Account API)

### MCP

Automate lead prioritization (описується використання фільтрів (по buying intent, ICP-персонам) та workflow-тригерів для автоматичного відбору та відправлення найбільш перспективних лідів у послідовності) Туn цікаво як це подати\! Типу data from prompt for agents, щось таке

# 

# **SaaS**

Generect SaaS is a no-code interface for fast search, analysis, and preparation of B2B leads and companies for real outreach.  
Below are the main use cases that will help you understand how the platform solves your needs.

---

## **Lead search**

### **Finding target leads based on ICP**

**Who it’s for**  
Sales teams, SDR, marketing, founders, growth teams.

**Problem**  
Most teams spend hours on manual research to find the "right” contacts. As a result:

* leads don’t match the ICP  
* outreach efforts are ineffective  
* teams work with noise instead of focus

**What Generect enables**  
Generect allows you to build lead search based on your Ideal Customer Profile and work only with a relevant audience.

**How it works**  
You define your ICP: roles, industries, company size, locations, and other attributes  
You run a lead search  
You get a list of contacts that match your criteria  
You start working with leads without additional cleaning

**Input data**

* roles and/or personas  
* industry  
* company size  
* location  
* additional filters such as data freshness or number of contacts per company

**Outcome**

* clearly focused list of leads  
* less noise, more replies  
* clear understanding of who to target right now

---

### **Leads by domain / website**

**Who it’s for**  
Account-based sales, founders, sales managers.

**Problem**  
You already know which companies you want to work with, but you don’t have contacts within those companies or the data is outdated.

**What Generect enables**  
Generect allows you to find contacts of people working at specific companies using a domain or website as a starting point.

**How it works**  
You enter a domain or a list of company websites  
You choose who you are looking for (role, location)  
You get relevant contacts within those companies

**Input data**

* domain or list of domains  
* roles / personas  
* location or other filters (optional)

**Outcome**

* direct access to decision-makers  
* ideal for account-based sales  
* less guesswork, more accuracy

---

### **Speeding up SDR workflows with personas**

**Who it’s for**  
SDR, sales managers, teams with a high volume of searches.

**Problem**  
SDRs repeatedly set up the same filters, wasting time and making mistakes.

**What Generect enables**  
Personas allow you to save typical role configurations and reuse them in any search.

**How it works**  
A persona is created (for example, "Sales Leadership”)  
SDR selects a persona instead of manually setting filters  
The search is launched instantly

**Input data**

* functions  
* seniority  
* keywords (include / exclude)

**Outcome**

* faster search  
* consistent team standards  
* fewer human errors

---

### **Refreshing and cleaning searches with exclude lists**

**Who it’s for**  
Sales, RevOps, marketing.

**Problem**  
Teams repeatedly contact:

* existing customers  
* already processed leads  
* irrelevant or "no-go” accounts

**What Generect enables**  
Exclude lists allow you to automatically remove unwanted contacts and companies from search results.

**How it works**  
You create an exclude list (CRM customers, competitors, etc.)  
You apply it to your search  
You work only with relevant data

**Input data**

* lists of contacts or companies  
* exclusion rules

**Outcome**

* clean lists  
* reduced risks  
* more professional outreach

---

### **Monitoring new leads in target segments**

**Who it’s for**  
 Sales teams, SDR, growth teams, and founders tracking dynamic markets.

**Problem**  
New potential leads constantly appear as people change roles, join new companies, or enter your target segment.  
 Without continuous monitoring:

* teams miss fresh opportunities  
* outreach happens too late  
* competitors reach leads first

**What Generect enables**  
Generect allows you to continuously monitor your target segments and identify new leads as they appear.

**How it works**

1. You define your ICP and target segment  
2. Generect continuously updates data within that segment  
3. New matching leads are identified automatically  
4. You review and act on fresh leads without running new searches from scratch

**Input data**

* ICP criteria  
* segment filters (industry, roles, location, etc.)

**Outcome**

* continuous flow of new leads  
* faster response to market changes  
* higher chances to reach prospects early  
* more proactive outbound strategy

---

## **Company search**

### **Discovering companies that match ICP**

**Who it’s for**  
Sales teams, founders, business development, strategy.

**Problem**  
Teams often don’t have a clear list of companies to target. ICP exists "in theory” but not as real data:

* hard to define which companies are actually relevant  
* difficult to scale across a team  
* unclear where to focus sales efforts

**What Generect enables**  
Company Search allows you to turn an abstract ICP into a concrete, data-backed and verifiable list of companies to target.

**How it works**  
You define your ICP at the company level: industries, size, locations, and other attributes  
Generect generates a list of companies that match these criteria  
You analyze results, refine filters, and see the real structure of your target market  
You use this list as a foundation for lead search or account-based sales

**Input data**

* industries  
* company size  
* geography  
* additional company attributes

**Outcome**

* clear list of target companies  
* transparent understanding of your actual ICP  
* foundation for systematic sales and growth

---

### **Market and segment analysis**

**Who it’s for**  
Founders, leadership, strategy, growth teams.

**Problem**  
Market decisions are often made intuitively without real data:

* how many companies exist in a segment  
* where they are located  
* which segments are worth focusing on

**What Generect enables**  
Generect allows you to explore markets through real companies and their data, not abstract reports.

**How it works**  
You define segment parameters (industry, size, region, etc.)  
You get a list of companies in that segment  
You compare different segments by adjusting criteria  
You identify where most potential customers are and which segments have the highest potential

**Input data**

* segment parameters  
* geography  
* company attributes

**Outcome**

* realistic view of market size and structure  
* data-driven strategic decisions  
* clear priorities for sales and marketing

---

### **Identifying new accounts for expansion**

**Who it’s for**  
Sales leadership, growth teams, business development.

**Problem**  
When entering new markets or verticals, it’s hard to quickly understand:

* which companies to target  
* where to start  
* how to avoid chaotic account discovery

**What Generect enables**  
Company Search helps quickly build a list of new accounts for expansion.

**How it works**  
You define criteria for a new market or vertical  
Generect finds companies that match these criteria  
You get a structured list of accounts  
Sales teams use this list to systematically enter a new segment

**Input data**

* new market criteria  
* company attributes  
* regions or industries

**Outcome**

* faster entry into new markets  
* clear list of target accounts without manual research  
* controlled and structured scaling process

---

## **Verify emails**

### **Verify emails before sending campaigns**

**Who it’s for**  
Marketing Ops teams before outbound campaigns, SDR/BDR teams preparing cold outreach, RevOps teams working with CRM and email campaigns.

**Problem**  
Outbound campaigns often perform poorly because:

* email addresses are outdated, invalid, or incorrect  
* higher risk of spam placement and domain damage  
* teams spend time manually verifying emails before campaigns

**What Generect enables**  
Generect allows you to verify email addresses before sending outbound campaigns to filter out invalid and risky contacts, reduce bounce rates, and protect sender reputation.

**How it works**  
You upload an email or a list of contacts before launching a campaign  
Generect instantly checks deliverability for each address  
The system assigns a status (valid / invalid / risky)  
Invalid and risky emails are excluded or separated

**Input data**

* email address or list of emails  
* segment or company (optional)

**Outcome**

* lower bounce rates  
* protected sender reputation  
* higher deliverability and response rates  
* faster campaign launch without manual checks

---

### **Detect fake, risky, or non-corporate emails**

**Who it’s for**  
Agencies and lead generation teams working with large datasets, RevOps and CRM owners responsible for data quality, SDR/BDR teams before cold outreach.

**Problem**  
Outbound campaigns often include emails that appear valid but are:

* fake or temporary  
* personal or non-corporate domains  
* reducing campaign effectiveness

**What Generect enables**  
Generect allows you to detect fake, risky, and non-corporate emails before launching campaigns.

**How it works**  
You upload emails or a list of contacts  
Generect analyzes domain type and email patterns  
The system assigns a status (valid / risky / fake)  
Fake, risky, and non-corporate emails are filtered out

**Input data**

* email address or list of emails  
* contact list (optional)

**Outcome**

* cleaner, corporate-only email lists  
* lower bounce and spam risks  
* more relevant campaigns  
* higher response rates

---

### **Process large contact lists in bulk**

**Who it’s for**  
Lead generation agencies, teams running large outbound campaigns, sales teams.

**Problem**  
Working with large contact lists is difficult because:

* no efficient way to validate emails at scale  
* manual verification takes too long  
* campaigns are launched with unclean data

**What Generect enables**  
Generect allows bulk validation of large email lists to quickly prepare clean, campaign-ready data.

**How it works**  
You upload a file (CSV or XLSX)  
Generect processes each email  
The system assigns a status (valid / invalid / risky)  
Results are available for review and export  
Invalid and risky emails can be excluded

**Input data**

* file with email list (CSV / XLSX)  
* contact list or database

**Outcome**

* fast validation at scale  
* clean, structured email databases  
* lower bounce rates  
* protected sender reputation  
* time saved

---

### **Continuous email validation for growing databases**

**Who it’s for**  
Sales teams with long deal cycles, companies with large CRM databases, CRM owners.

**Problem**  
Contact data quickly becomes outdated:

* people change roles or companies  
* emails become inactive  
* CRM accumulates outdated contacts  
* manual checks don’t scale

**What Generect enables**  
Generect allows ongoing validation of emails in growing databases.

**How it works**  
You periodically upload updated contact lists  
Generect checks the current status of each email  
The system identifies invalid or risky contacts  
Results are used to update CRM or exclude contacts

**Input data**

* email data from CRM or internal database  
* contact lists or segments  
* file or export (CSV / XLSX)

**Outcome**

* up-to-date contact data  
* cleaner CRM  
* no manual checks  
* stable sender reputation

---

## **Find contacts**

### **Finding verified work emails for outbound campaigns**

**Who it’s for**  
Marketing teams, sales teams, growth teams.

**Problem**  
Outbound campaigns fail because:

* emails are outdated or incorrect  
* bounce rates increase  
* manual verification takes time

**What Generect enables**  
Generect allows you to find and verify corporate emails before outreach.

**How it works**  
You upload a list or use existing leads  
Generect finds emails based on name and domain  
Emails are validated instantly  
Risky or invalid emails are filtered out

**Input data**

* full name  
* company or domain  
* contact list (optional)

**Outcome**

* lower bounce rates  
* protected sender reputation  
* higher response rates  
* faster campaign launch

---

### **Completing contact profiles with missing email data**

**Who it’s for**  
Sales ops, RevOps, marketing teams.

**Problem**  
CRM data is incomplete and lacks emails.

**What Generect enables**  
Generect enriches contact profiles with corporate emails.

**How it works**  
You select contacts  
Run email search  
Emails are validated  
Profiles are updated

**Input data**

* contact profiles  
* full name  
* company

**Outcome**

* more usable contacts  
* less manual work  
* complete profiles  
* outreach-ready data

---

### **Finding direct phone numbers for high-value leads**

**Who it’s for**  
Recruiting teams, sales teams working with high-value leads.

**Problem**  
Email is not always effective. Finding phone numbers manually is slow and unreliable.

**What Generect enables**  
Generect allows you to find direct phone numbers for faster contact.

**How it works**  
You work with contacts  
Generect finds phone numbers  
Numbers are returned only if available  
You pay only for successful results

**Input data**

* full name  
* company or LinkedIn

**Outcome**

* faster contact  
* fewer delays  
* direct communication channel  
* pay only for results

---

### **Enabling multi-channel outreach (email \+ phone)**

**Who it’s for**  
Sales teams, SDR, recruiters, growth teams.

**Problem**  
Using only one channel reduces response rates. Teams often lack full contact data.

**What Generect enables**  
Generect provides both emails and phone numbers for multi-channel outreach.

**How it works**  
You upload or find contacts  
Generect finds emails and phone numbers  
Emails are validated  
Contacts are ready for outreach

**Input data**

* full name  
* company or domain  
* LinkedIn (optional)

**Outcome**

* higher response rates  
* faster contact  
* flexible outreach strategies  
* ready-to-use contact data

---

### **Finding emails from LinkedIn URL**

**Who it’s for**  
Sales teams, SDR, marketing, growth teams using LinkedIn or Sales Navigator.

**Problem**  
Teams have LinkedIn profiles but no contact data. Manual search is slow and unreliable.

**What Generect enables**  
Generect converts LinkedIn profiles into verified corporate emails.

**How it works**  
You add LinkedIn URLs  
Generect identifies the person and company  
Email is generated  
Email is validated  
Invalid emails are filtered out

**Input data**

* LinkedIn URL or list  
* optional filters

**Outcome**

* LinkedIn profiles converted into verified emails  
* faster outreach preparation  
* less manual work  
* ready-to-use leads

# API Use cases

## Data Discovery

### 1\. SaaS platform displays search results to users at no cost(Preview API)

**Who it's for**  
SaaS platforms (Clay, n8n, AI SDR tools), developers building lead discovery features.

**Problem**  
SaaS platforms want to show search results to their users, but current API charges for every displayed lead — even before the user decides to buy contact data. This makes it too expensive to build "browse → decide → reveal" flows.

**What Generect enables**  
Preview API returns cached lead data (name, title, company, location, seniority, linkedin\_url, domain) with a unique lead\_id — much cheaper than full enrichment. Users browse results and pay only when they reveal contacts via Enrich API.

**How it works**

1\. Your app sends ICP filters to POST /preview/leads  
2\. Generect returns cached data: name, title, company, location, industry, seniority, linkedin\_url, domain  
3\. Your users browse and select leads  
4\. Call /enrich/database/lead with lead\_id for selected leads  
5\. Pay only for enrichment

**Input data**  
Job titles, seniorities, locations, company industries, company headcount

**Outcome**  
- Cheaper browsing for end users (cached data)  
- Pay only for actionable data (email, phone, full profile)  
- Higher conversion from "browse" to "purchase"

### 3\. Real-time lead search with advanced filters (Search API \- Realtime)

**Who it's for**  
Account-based sales teams, recruiters, enterprise sales targeting niche personas.

**Problem**  
Cached data may be outdated or lack granular filters. Teams targeting specific personas (e.g., "VP Engineering who changed jobs in last 6 months at Series B startups") need realtime LinkedIn-grade filtering.

**What Generect enables**  
/search/realtime/leads searches live data with advanced filters: keywords, past companies, schools, years in position, functions.

**How it works**

1\. Define precise ICP with advanced filters  
2\. Call POST /search/realtime/leads  
3\. Get fresh, highly-targeted results (5-60 sec)  
4\. Use for personalized outreach

**Input data**  
All database filters \+ keywords, personas, past companies, schools, groups, years in position, functions

**Outcome**

- Up-to-date lead data  
- Hyper-targeted lists for ABM campaigns  
- Advanced filters not available in database mode

### 4\. Find companies and their contacts in a single request (Search API)

**Who it's for**  
B2B sales teams, partnerships managers, investors doing market mapping.

**Problem**  
Teams need both company and decision-maker data in one flow. Currently requires two separate searches and manual matching.

**What Generect enables**  
/search/database/company-leads (or realtime) returns companies matching your ICP together with their key contacts in a single request.

**How it works**

1\. Define company ICP: industry, headcount, location  
2\. Add lead filters: target roles, seniority  
3\. Call POST /search/database/company-leads  
4\. Get matched companies with their relevant contacts

**Input data**  
Company filters (industry, headcount, location, type) \+ lead filters (roles, seniority)

**Outcome**

- Company \+ contact data in one call  
- No manual matching needed  
- Faster account-based prospecting

### 5\. Quickly estimate audience size before launching a campaign (Preview API)

**Who it's for**  
Marketing teams, growth leads, campaign managers.

**Problem**  
Before launching an outbound campaign, teams need to know: "How many leads match this ICP?" Without a free count, they either guess or pay to find out.

**What Generect enables**  
POST /preview/leads/count returns the total number of matching leads — always free.

**How it works**

1\. Define ICP filters  
2\. Call POST /preview/leads/count  
3\. Get total count instantly, no charge  
4\. Adjust filters until the audience size is right  
5\. Proceed to search/enrich

**Input data**  
Job titles, seniorities, locations, industries, headcount

**Outcome**  
- Free audience sizing before any spend  
- Better campaign planning and budget estimation  
- Faster ICP iteration

## Data Enrichment

### 1\. Reveal full lead profile after Preview (Enrich API)

**Who it's for**  
SaaS platforms, AI agents, sales teams who use Preview → Enrich flow.

**Problem**  
After browsing leads via Preview, teams need full profiles (linkedin, work history, skills) before outreach. They need a simple way to "unlock" a lead.

**What Generect enables**  
One endpoint, multiple input options: lead\_id, LinkedIn URL, email, or name+company. No data found \= no charge.

**How it works**

1\. Take lead\_id from Preview results  
2\. Call POST /enrich/database/lead (cached, 1 credit) or /enrich/realtime/lead (fresh, 2 credits)  
3\. Get full profile: linkedin\_url, work history, education, skills, company details  
4\. If lead not found — 0 credits charged

**Input data**  
lead\_id, OR LinkedIn URL, OR email (reverse lookup), OR name \+ company

**Outcome**

- Full lead profile with work history and skills  
- Flexible input — use whatever identifier you have  
- "No Data, No Charge" — zero risk

### 2\. Reverse email lookup — find a person by email (Enrich API)

**Who it's for**  
Sales teams, customer success, recruiters who have an email but need full context.

**Problem**  
You received an inbound email or have a list of emails — but don't know who these people are, their role, company size, or seniority.

**What Generect enables**  
/enrich/realtime/lead accepts email as input and returns the full lead profile via reverse lookup.

**How it works**  
1\. Call POST /enrich/realtime/lead with { "email": "john@acme.com" }  
2\. Get full profile: name, title, company, LinkedIn, work history  
3\. If not found — 0 credits

**Input data**  
Email address

**Outcome**

- Full context on any email contact  
- Better lead qualification for inbound  
- Enrich existing email lists with profile data

### 3\. Enrich company data by domain or name (Enrich API)

**Who it's for**  
CRM admins, data ops teams, marketing automation builders.

**Problem**  
CRM records often have just a company name or domain. Teams need full company data (industry, headcount, LinkedIn page) for segmentation and routing.

**What Generect enables**  
/enrich/database/company or /enrich/realtime/company accepts domain, name, LinkedIn URL, or internal ID — returns full company profile.

**How it works**

1\. Pass company domain (e.g., "acme.com (http://acme.com/)") to POST /enrich/database/company  
2\. Get full profile: industry, headcount, location, LinkedIn URL, website  
3\. Update CRM record automatically

**Input data**  
Domain, OR company name, OR LinkedIn URL, OR internal id

**Outcome**

- Complete company profiles for CRM enrichment  
- Multiple input options for flexibility  
- Automated data hygiene

### 4\. Find a work email after Preview (Email API)

**Who it's for**  
SDR teams, outbound automation, AI sales agents.

**Problem**  
You found the right lead via Preview or Search — now you need their email for outreach.

**What Generect enables**  
/email/find — get email by first\_name \+ last\_name \+ domain. Charged per request in batch.

**How it works**

1\. Take first\_name, last\_name, domain from Preview results  
2\. Call POST /email/find with { "first\_name": "John", "last\_name": "Doe", "domain": "acme.com" }  
3\. Get verified email with confidence score

**Input data**  
first\_name \+ last\_name \+ domain

**Outcome**

- Verified work email with deliverability check  
- "No Data, No Charge" — pay only for results  
- Confidence score and catch-all detection included

### 5\. Find mobile number for cold calling (Phone API)

**Who it's for**  
Inside sales, BDR teams, call centers.

**Problem**  
Email outreach has low response rates. Direct phone contact converts better, but finding verified mobile numbers is hard and expensive.

**What Generect enables**  
/phone/find by lead\_id or name+company. 5 credits if found, 0 if not.

**How it works**

1\. Call POST /phone/find with lead\_id or name \+ company  
2\. Get phone number with type (mobile/office) and country  
3\. Not found? No charge.

**Input data**  
lead\_id OR first\_name \+ last\_name \+ company domain

**Outcome**

- Verified phone numbers for direct outreach  
- Mobile vs office type detection  
- Zero-risk pricing model

## Bulk Processing

### 1\. Bulk lead search by ICP from cached database (Search API \- Database)

**Who it's for**  
SDR teams, growth hackers, outbound agencies doing high-volume prospecting.

**Problem**  
Teams need large lead lists fast and cheap. Realtime search is slow and expensive when freshness isn't critical — they just need volume.

**What Generect enables**  
/search/database/leads returns full lead data (incl. linkedin\_url, domain) from Generect's cached database — 10x cheaper and near-instant.

**How it works**

1\. Define ICP: roles, industries, headcount, locations  
2\. Call POST /search/database/leads  
3\. Get full lead profiles in \<1 sec  
4\. Export to CRM or outreach tool  
**Input data**  
Job titles, seniorities, locations, company industries, company headcount

**Outcome**

- Large lead lists at 0.2-0.1 credit/result  
- Sub-second response time  
- Full data including linkedin\_url and company domain

### 2\. Bulk email find для large lists (Email API)

**Who it's for**  
Outbound agencies, growth teams with large lead lists, data ops.

**Problem**  
Finding emails one by one for 10K+ leads is too slow. Teams need async bulk processing with job tracking.

**What Generect enables**  
/email/find/bulk processes thousands of leads asynchronously. Check status via job\_id.

**How it works**

1\. Submit list of lead\_ids or name+domain pairs to POST /email/find/bulk  
2\. Get job\_id  
3\. Poll GET /email/find/bulk/{job\_id} for status  
4\. Download results when complete

**Input data**  
Array of lead\_id or first\_name \+ last\_name \+ domain

**Outcome**

- Process thousands of leads in one request  
- Async with job tracking   
- Focus on real, verified emails

### 3\. Email list validation before sending (Email API)

**Who it's for**  
Email marketers, outbound teams, anyone sending bulk emails.

**Problem**  
Sending to invalid emails kills deliverability and sender reputation. Teams need to validate before sending.

**What Generect enables**  
/email/validate checks deliverability, catch-all, disposable, and risk score.

**How it works**

1\. Submit email list to POST /email/validate  
2\. Get per-email status: VALID, RISKY, CATCH\_ALL, INVALID  
3\. Filter out risky/invalid before sending

**Input data**  
Array of email addresses

**Outcome**

- Protect sender reputation  
- Reduce bounce rate  
- Clear risk scoring per email

### 4\. Bulk phone find for teams with large contact lists (Phone API)

**Who it's for**  
Call centers, outbound agencies, sales teams scaling phone outreach.

**Problem**  
Finding phones one by one doesn't scale. Need async bulk processing for large lists.  
**What Generect enables**  
/phone/find/bulk — submit thousands of leads, get results asynchronously.

**How it works**

1\. Submit lead list to POST /phone/find/bulk  
2\. Get job\_id  
3\. Poll for results via GET /phone/find/bulk/{job\_id}  
4\. Pay only per found phone

**Input data**  
Array of lead\_id or name \+ company pairs

**Outcome**

- Scale phone prospecting to thousands  
- Async processing with tracking  
- "No Data, No Charge" per result

## Automations & Integrations 

### 1\. AI agent automatically processes new leads end-to-end

**Who it's for**  
AI agent developers, automation builders, sales ops teams.

**Problem**  
Sales teams manually process inbound leads: check if they match ICP, find emails, add to CRM. This takes hours and doesn't scale.

**What Generect enables**  
Generect API becomes a data layer for AI agents — agent pulls leads, scores them, gets emails, pushes to CRM without human involvement.

**How it works**

1\. Agent triggers on new lead signal (form fill, signup, etc.)  
2\. Calls /preview/leads to check ICP match  
3\. Calls /email/find for qualified leads only  
4\. Pushes enriched contact to CRM via their API  
5\. Notifies sales team in Slack

**Input data**  
ICP filters, lead\_id, CRM credentials

**Outcome**  
- Fully automated lead qualification pipeline  
- No manual research needed  
- Sales team gets only pre-qualified, enriched leads

### 2\. AI agent pre-screens leads before spending credits (Preview API)

**Who it's for**  
AI agent developers, automation builders, no-code platforms.

**Problem**  
AI agents processing large ICP queries spend credits on every lead — including irrelevant ones. No way to "pre-screen" before committing budget.

**What Generect enables**  
Agent calls Preview to get a broad list, applies its own logic (scoring, deduplication, CRM matching), then enriches only the best matches.

**How it works**

1\. Agent sends broad ICP to POST /preview/leads  
2\. Gets 100+ masked leads for free  
3\. Agent scores leads by title \+ seniority \+ industry match  
4\. Enriches only top 10-20 via /enrich/database/lead

**Input data**  
ICP filters, lead\_id for enrichment

**Outcome**  
- 5-10x lower spend per qualified lead  
- Agent autonomy in lead qualification  
- No wasted credits on irrelevant contacts

### 3\. No-code automation: new signup → enrichment → CRM

**Who it's for**  
Growth teams, marketers, ops teams using Make, n8n, Zapier.

**Problem**  
When a new user signs up, teams manually look them up to understand who they are. Slow, inconsistent, doesn't scale.

**What Generect enables**  
Connect Generect to your automation platform via API. New signup triggers enrichment — and full profile lands in CRM automatically.

**How it works**

1\. Trigger: new signup in your product  
2\. Make/n8n calls POST /enrich/database/lead with email  
3\. Gets full profile: title, company, seniority, industry  
4\. Updates CRM record automatically  
5\. Routes to right sales rep based on company size

**Input data**  
Email or name \+ company from signup form

**Outcome**  
- Every new signup enriched in seconds  
- CRM always up to date  
- Automatic lead routing and scoring

### 4\. Generect as a data source for outreach platforms

**Who it's for**  
Outbound agencies, SDR teams using Instantly, Lemlist, Apollo, Smartlead.

**Problem**  
Outreach platforms need fresh, verified lead lists. Teams manually export/import data between tools — error-prone and time-consuming.

**What Generect enables**  
Build a pipeline: Generect API pulls targeted leads → validates emails → exports directly into your outreach tool via their API.

**How it works**

1\. Call /search/database/leads with ICP  
2\. Bulk validate emails via /email/validate  
3\. Filter valid contacts  
4\. Push to outreach platform via their API  
5\. Launch campaign

**Input data**  
ICP filters, outreach platform API credentials

**Outcome**  
- Fresh, verified leads flowing directly into campaigns  
- No manual CSV exports  
- Higher deliverability from pre-validated emails

### 5\. Enrich CRM contacts with phone numbers for Customer Success

**Who it's for**  
Customer success teams, account managers.

**Problem**  
Existing CRM contacts lack phone numbers. CS teams need direct lines for renewals and upsells but don't want to pay for numbers that can't be found.

**What Generect enables**  
Use existing lead\_id or name+company from CRM to find phone numbers. Only pay for successful lookups.

**How it works**

1\. Export contacts from CRM  
2\. For each, call /phone/find with available identifiers  
3\. Update CRM with found numbers  
4\. Zero cost for contacts where phone wasn't found

**Input data**  
lead\_id, or first\_name \+ last\_name \+ company

**Outcome**

- Enriched CRM with direct phone numbers  
- Better reach rates for CS calls  
- Cost-effective — no payment for missing data

## Account Management

### 1\. Real-time credit balance monitoring

**Who it's for**  
Platform integrators, finance teams, admins managing API spend.

**Problem**  
Teams using API at scale need to monitor credit balance to avoid service interruption or overspend. No visibility \= budget surprises.

**What Generect enables**  
GET /api/v1/accounts/me  returns current credit balance, monthly usage, and plan details including Preview tier eligibility.

**How it works**

1\. Call GET /api/v1/accounts/me   
2\. Check credits.balance and credits.used\_this\_month  
3\. Set alerts in your system when balance drops below threshold

**Input data**  
API key (authentication)

**Outcome**

- Real-time credit balance visibility  
- Proactive alerts before credits run out  
- Clear plan and tier information

───

### 2\. API usage analytics by operation type

**Who it's for**  
Product managers, data ops, finance teams optimizing API costs.

**Problem**  
Teams don't know which API operations consume most credits. Can't optimize spend without breakdown.

**What Generect enables**  
 GET /api/v1/accounts/usage  returns credit breakdown by operation type: search (database/realtime), enrich, email find.

**How it works**

1\. Call  GET /api/v1/accounts/usage   
2\. See breakdown: how many credits spent on search vs enrich vs email  
3\. Identify most expensive operations  
4\. Optimize: switch from realtime to database where freshness isn't critical

**Input data**  
API key, period

**Outcome**

- Full cost transparency by operation type  
- Data-driven optimization of API usage  
- Clear ROI per API feature

───

### 3\. Transaction history for financial reporting

**Who it's for**  
Finance teams, admins, compliance officers.

**Problem**  
Need detailed transaction history for invoicing, auditing, and reconciliation. Current tools don't provide per-operation granularity.

**What Generect enables**  
 GET /api/v1/accounts/transactions s returns every credit transaction with timestamp, type, amount, and details.

**How it works**

1\. Call  GET /api/v1/accounts/transactions   
2\. Get chronological list of all operations  
3\. Export for accounting or reconciliation

**Input data**  
API key, optional date range

**Outcome**

- Complete audit trail of all API charges  
- Per-operation detail for accounting  
- Easy reconciliation with billing

## 

Data Discovery

1\. SaaS platform displays search results to users at no cost  
2\. High-volume lead search by ICP from cached database  
3\. Real-time lead search with advanced filters  
4\. Search companies and their key contacts in a single request  
5\. Fast audience sizing before launching a campaign

Data Enrichment

1\. Reveal full lead profile after Preview  
2\. Reverse email lookup — find a person by email  
3\. Enrich company data by domain or name  
4\. Find work email by lead\_id after Preview  
5\. Find mobile number for cold calling

Bulk Processing

1\. Bulk email find for large lists  
2\. Email list validation before sending  
3\. Bulk phone find for teams with large contact lists  
4\. AI agent pre-screens leads before spending credits

Automations & Integrations

1\. AI agent automatically processes new leads end-to-end  
2\. No-code automation: new signup → enrichment → CRM  
3\. Generect as a data source for outreach platforms  
4\. Enrich CRM contacts with phone numbers for Customer Success

Account Management

1\. Real-time credit balance monitoring  
2\. API usage analytics by operation type  
3\. Transaction history for financial reporting

# MCP

## 1\. Target Prospects

**Who it's for**  
 Sales teams, SDRs, and growth marketers at B2B SaaS companies. Recruiters sourcing candidates based on specific criteria. Marketers building targeted outreach lists.

**Problem**  
 Manual lead search across LinkedIn and other sources takes hours. Data quickly becomes outdated, contacts are often unverified, and building a list of 50+ leads turns into repetitive manual work. Existing tools require copy-paste workflows or complex integrations.

**What Generect enables**  
 Through MCP integration, an AI agent can retrieve verified B2B leads with full profiles from a single prompt — including name, job title, company, location, and LinkedIn URL. No manual search, no tab switching.

**How it works**

1. The user sends a prompt to an AI agent: "Find 10 growth marketing managers in Berlin working at SaaS companies”  
2. The AI sends a request via MCP to the Generect API with filters (role, location, industry)  
3. Generect searches and verifies contacts in real time  
4. The AI returns a structured list of leads  
5. Results can be exported to a CRM or outreach tool

**Input data**  
 - Job title / role (e.g. "Growth Marketing Manager”)  
 - Location (e.g. "Berlin”)  
 - Industry / company type (e.g. "SaaS”)  
 - Number of results  
 - Additional filters: company size, revenue, tech stack

**Outcome**  
 - Ready-to-use list of verified leads in seconds  
 - Full profiles: name, title, company, location, LinkedIn URL  
 - Prospecting time reduced from hours to minutes  
 - Higher conversion rates through precise targeting

## 2\. Account Sourcing

**Who it's for**  
 Sales teams building pipeline based on ICP. Business analysts conducting market research. Partnership managers looking for potential partners. Investors screening companies.

**Problem**  
 Finding companies that truly match your ICP is difficult. Generic databases often contain outdated data and lack precise filtering by company size or industry. Manual research across multiple sources is inefficient and incomplete.

**What Generect enables**  
 Through MCP, an AI agent can identify companies based on precise ICP parameters — industry, size, location — and return structured, up-to-date data including company name, domain, employee count, and headquarters.

**How it works**

1. The user defines criteria: "Find 20 fintech companies in the US with 50–200 employees”  
2. The AI sends filters via MCP to the Generect API  
3. Generect searches across its database using up-to-date data  
4. The AI returns a structured list of companies with key metrics  
5. Results are ready for CRM import or further enrichment

**Input data**  
 - Industry (e.g. "Fintech”)  
 - Location / region (e.g. "US”)  
 - Company size (e.g. 50–200 employees)  
 - Additional filters: revenue range, funding stage, technologies

**Outcome**  
 - Targeted list of companies matching your ICP  
 - Data includes: company name, industry, employee count, HQ, domain  
 - Faster market segmentation for strategic decision-making  
 - More efficient pipeline — fewer cold companies, more relevant prospects

## 3\. Email Generation

**Who it's for**  
 SDRs and sales reps preparing cold outreach. Marketing teams running email campaigns. Recruiters who need direct contact with candidates. Anyone who knows a person’s name and company but doesn’t have their email.

**Problem**  
 You know who you want to reach out to, but you don’t have their email. Manually searching for contacts is time-consuming, and guessing email formats is unreliable. Invalid emails lead to high bounce rates and damage your domain reputation.

**What Generect enables**  
 Through MCP, an AI agent generates the most likely email address based on company-specific patterns. Generect analyzes email formats within the organization and returns a predicted address — ready for verification and outreach.

**How it works**

1. The user submits a request: "Generate a professional email address for Olivia Brown from Stripe”  
2. The AI sends the name and company via MCP to the Generect API  
3. Generect analyzes company email patterns (e.g. first.last@, f.last@, etc.)  
4. Returns the most likely email address  
5. Optionally, the email can be verified before use

**Input data**  
 - Full name of the contact (e.g. "Olivia Brown”)  
 - Company name or domain (e.g. "Stripe” or "stripe.com”)

**Outcome**  
 - Email generated based on real company patterns  
 - Ready for verification and cold outreach  
 - Lower bounce rates compared to manual guessing  
 - Scalable — generate emails for hundreds of contacts in minutes

## 4\. Profile Lookup 

**Who it's for**  
HR teams and recruiters evaluating candidates. Sales teams qualifying leads before outreach. Account managers building relationship intelligence. Marketing teams personalizing communication.

**Problem**  
LinkedIn profiles contain a lot of information, but analyzing them manually is slow. Reviewing 50 candidates or leads can take hours. What’s needed is not just raw data, but insights — whether the person is a good fit, their strengths, and how to personalize communication.

**What Generect enables**  
Through MCP, an AI agent analyzes a LinkedIn profile and returns structured insights — including experience, skills, and key highlights. Instead of scrolling through profiles, you get a ready-to-use summary tailored to your use case (hiring, sales, partnerships).

**How it works**

1. The user provides a LinkedIn URL: "Analyze this LinkedIn profile: linkedin.com/in/sophiawright”  
2. The AI sends the URL via MCP to the Generect API  
3. Generect parses and structures profile data  
4. The AI analyzes the data and generates insights based on the user’s goal (hiring / sales / research)  
5. Returns a summary with key highlights and recommendations

**Input data**  
- LinkedIn profile URL (e.g. "https://www.linkedin.com/in/sophiawright”)  
- Optional: context (hiring, sales qualification, research)

**Outcome**  
- Structured profile analysis: experience, skills, background  
- Key insights tailored to the use case (hiring, lead qualification)  
- Personalized outreach based on real profile data  
- Reduced screening time from 10–15 minutes to seconds per profile

## 5\. Advanced Workflows 

**Who it's for**  
 Sales leaders and SDR teams building a full outreach pipeline from scratch. Growth teams that need an end-to-end process — from company discovery to personalized messaging. Revenue Operations teams automating prospecting workflows.

**Problem**  
 Typical prospecting involves 4–5 separate steps across different tools: find companies → find contacts → generate emails → research profiles → write messages. Each step requires manual work, copy-pasting between platforms, and wasted time. Even with multiple API tools, you still need "glue” to connect them.

**What Generect enables**  
 Through MCP, an AI agent executes the entire workflow in a single interaction — from company discovery to fully personalized outreach. Each step automatically builds on the previous one. One prompt \= a complete pipeline.

**How it works**

**Workflow A — Multi-Step Research**

1. The user defines a chain: "Find tech companies in London with 100–500 employees, find the Head of Sales at each, and generate email addresses”  
2. The AI uses MCP to find companies based on criteria (Company Search)  
3. For each company, it identifies contacts by role (Lead Search)  
4. For each contact, it generates email addresses (Email Generation)  
5. Returns a ready-to-use table: company → contact → role → email

**Workflow B — Personalized Outreach**

1. The user provides a LinkedIn URL: "Get details for linkedin.com/in/johnsmith and draft a personalized intro message”  
2. The AI analyzes the profile via MCP (LinkedIn Profile Lookup)  
3. Based on experience, skills, and background, it generates a personalized intro message  
4. Returns profile insights along with a ready-to-send draft message

**Workflow C — Targeted Prospect List**

1. The user submits a large-scale request: "Find 50 e-commerce companies in Germany, get their marketing directors, generate emails”  
2. The AI performs batch Company Search (50 companies)  
3. Runs Lead Search for each company based on the role "Marketing Director”  
4. Generates emails for all identified contacts  
5. Returns a complete prospect list, ready for CRM import or outreach tools

**Input data**  
 - ICP parameters: industry, location, company size  
 - Target role (e.g. "Head of Sales”, "Marketing Director”)  
 - LinkedIn URL (for personalized outreach)  
 - Number of companies / contacts  
 - Outreach context (sales, partnerships, hiring)

**Outcome**  
 - Full prospect list in a single request: company → contact → email  
 - Personalized messages based on real profile data  
 - Pipeline building reduced from days to minutes  
 - Connected workflow — no data loss between steps  
 - Scalable: 10, 50, 100+ companies in one workflow  
 - Ready for CRM import or email campaign launch

---
name: Generect
description: Use when searching for B2B leads and companies, finding verified corporate emails, validating email deliverability, enriching CRM data, or building targeted outreach lists. Reach for this skill when building lead discovery workflows, integrating with AI agents via MCP, or automating contact verification at scale.
metadata:
    mintlify-proj: generect
    version: "1.1"
---

# Generect Skill

## Product summary

Generect is a real-time B2B lead discovery and verification platform. It searches live data sources (LinkedIn, Crunchbase, company websites) to find verified contacts, generate corporate emails, and validate deliverability. Agents use Generect to automate lead searches, enrich CRM data, and build targeted outreach lists without manual research.

**Key resources:**
- API base URL: `https://api.generect.com` (newer endpoints live under `/api/v1/...`, legacy endpoints under `/api/...` — use each path exactly as documented)
- Authentication: API key in the `Authorization` header (`Token <api-key>`)
- OpenAPI spec: https://docs.generect.com/api-reference/openapi.yaml
- MCP integration: Remote server at `https://mcp.generect.com/mcp` (Streamable HTTP, OAuth 2.1 or API key; supports Claude Desktop, Cursor, OpenAI Agent Builder). Local alternative: `npx -y generect-ultimate-mcp@latest`
- Primary docs: https://docs.generect.com (agent-readable index: https://docs.generect.com/llms.txt)

## When to use

Reach for Generect when:
- **Searching for leads or companies** by job title, industry, location, company size, or technology stack
- **Finding verified corporate emails** for a contact (first name, last name, domain)
- **Validating email deliverability** before sending campaigns (including catch-all detection)
- **Enriching CRM records** with fresh contact or company data
- **Building targeted outreach lists** based on Ideal Customer Profile (ICP) criteria
- **Integrating with AI agents** via MCP to automate lead discovery in natural language workflows
- **Counting audience size** before launching campaigns (count endpoints)
- **Bulk processing** enrichment, email finding, or validation at scale

Do not use Generect for: personal email searches, non-business contacts, or when you already have verified, current data that doesn't need enrichment.

## Quick reference

### Authentication
```
Authorization: Token <your-api-key>
```
Replace `<your-api-key>` with your actual API key from https://beta.generect.com.

### Core API endpoints (current, `/api/v1/...`)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/v1/search/database/leads/` | POST | Search leads in the cached database by ICP filters |
| `/api/v1/search/realtime/leads/` | POST | Search leads with live data by ICP filters |
| `/api/v1/search/database/companies/` | POST | Search companies in the cached database |
| `/api/v1/search/realtime/companies/` | POST | Search companies with live data |
| `/api/v1/search/database/leads/count/` | POST | Free audience-size count before a search |
| `/api/v1/enrich/realtime/lead/` | POST | Enrich a single lead (ID, LinkedIn URL, or email) |
| `/api/v1/enrich/realtime/company/` | POST | Enrich a single company |
| `/api/v1/email/find/` | POST | Find a verified work email (billed only when found) |
| `/api/v1/email/validate/` | POST | Validate email deliverability |
| `/api/v1/phone/find/` | POST | Find a phone number for a lead |
| `/api/v1/accounts/me/` | GET | Account profile, credit balance, usage |
| `/api/v1/webhooks/` | GET/POST | Manage webhooks for bulk-job notifications |

Bulk variants exist for enrich, email find, and phone find (e.g. `/api/v1/email/find/bulk/`). See the OpenAPI spec for the full list.

### Legacy API endpoints (`/api/...`, still supported)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/linkedin/leads/by_icp/` | POST | Search leads by ICP filters |
| `/api/linkedin/companies/by_icp/` | POST | Search companies by ICP filters |
| `/api/linkedin/leads/by_link/` | POST | Get a lead by LinkedIn profile URL |
| `/api/linkedin/companies/by_link/` | POST | Get a company by LinkedIn URL |
| `/api/linkedin/email_finder/` | POST | Generate and validate a corporate email |
| `/api/linkedin/email_validator/` | POST | Validate existing email addresses |
| `/api/auth/users/me/` | GET | Check account balance and credit limits |
| `/api/auth/transactions/` | GET | View API usage history and credits spent |

### MCP tools (via Claude Desktop, Cursor, or Agent Builder)
- `search_leads` — Search leads by ICP filters
- `search_companies` — Search companies by ICP filters
- `generate_email` — Generate email from first/last name and domain
- `get_lead_by_url` — Fetch lead data from LinkedIn profile URL
- `health` — Quick API health check

### Email validation statuses
- **Valid** — Address exists; server confirmed mail acceptance
- **Invalid** — Mailbox does not exist or server rejected it
- **Catch-all** — Domain accepts any email; true deliverability uncertain
- **SMTP** — Server did not provide clear response (common on protected domains)
- **Unknown** — Server did not respond or gave ambiguous response

## Workflow

### Typical lead search and outreach workflow

1. **Define your ICP** — Identify target customer attributes: industry, company size, location, job titles, skills.
2. **Check your credit balance** — Call `GET /api/v1/accounts/me/` (or legacy `GET /api/auth/users/me/`).
3. **Count first** — Use a free count endpoint (e.g. `POST /api/v1/search/database/leads/count/`) to estimate audience size.
4. **Search for leads or companies** — Call the search endpoint that matches your freshness needs (database = cached, realtime = live).
5. **Find and validate emails** — Call `POST /api/v1/email/find/` (billed only for valid emails found) or `POST /api/v1/email/validate/` for existing lists.
6. **Check validation status** — Prefer "Valid"; treat "Catch-all" and "SMTP" with caution before sending.
7. **Export or integrate** — Push results to your CRM via API.
8. **Monitor usage** — Track credits via `GET /api/v1/accounts/usage/` or transactions endpoints.

### MCP integration workflow (AI agent)

1. **Remote (recommended)** — Add a custom connector with URL `https://mcp.generect.com/mcp`; authenticate via OAuth or pass your API key in the `Authorization` header.
2. **Local (alternative)** — Configure your client to run `npx -y generect-ultimate-mcp@latest` with `GENERECT_API_KEY` set.
3. **Query in natural language** — e.g. "Find 10 VP Sales in Berlin working at SaaS companies."
4. **Agent executes** — The client calls MCP tools (`search_leads`, `generate_email`, etc.) and returns results.

## Common gotchas

- **Forgetting the `Token` prefix** — Use `Authorization: Token <api-key>`. Omitting `Token` causes 401 errors on the REST API.
- **Trailing slash is required on API endpoints** — Every REST endpoint path ends with `/`. Requests without it may fail.
- **Wrong base-path join** — Legacy endpoints are `https://api.generect.com/api/...`; newer ones are `https://api.generect.com/api/v1/...`. Never combine them (`/api/v1/api/...` returns 404).
- **Catch-all domains inflate valid email counts** — A "Catch-all" status means the domain accepts any email; filter these before sending.
- **Confusing Email Finder with Email Validator** — Finder generates emails from name + domain (billed only when a valid email is found). Validator checks existing emails (billed per validation).
- **MCP configuration JSON syntax errors** — Invalid JSON in your client config silently prevents MCP from loading; validate the JSON and check logs with `MCP_DEBUG=1` (local server).
- **Stale cached data in Database mode** — Database mode is fast and cheaper but cached; use Realtime mode for time-sensitive signals.

## Resources

**Machine-readable:**
- OpenAPI 3.0 spec: https://docs.generect.com/api-reference/openapi.yaml
- Docs index for agents: https://docs.generect.com/llms.txt

**Critical documentation pages:**
- [API Introduction](https://docs.generect.com/api-reference/introduction) — Base URL, auth, and spec download
- [Authentication](https://docs.generect.com/api-reference/authentication) — Auth details and header format
- [Database vs Realtime](https://docs.generect.com/api-reference/database-vs-realtime) — How to pick the right search mode
- [Remote MCP](https://docs.generect.com/integrations/mcp/remote-mcp) — Connect via `https://mcp.generect.com/mcp`
- [Local MCP Quick Start](https://docs.generect.com/integrations/mcp/quick-start) — Configure npx-based MCP for Claude Desktop or Cursor
- [ICP Search Guide](https://docs.generect.com/docs/icp-search) — How to build effective searches with filters
- [Email Finder & Validation](https://docs.generect.com/docs/email-finder) — Generate and validate corporate emails

---

> For additional documentation and navigation, see: https://docs.generect.com/llms.txt

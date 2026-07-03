# Generect Documentation

Source for [docs.generect.com](https://docs.generect.com) — the documentation site for the Generect real-time B2B contact and company data API. Built with [Mintlify](https://mintlify.com).

## Structure

- `docs.json` — site configuration and navigation
- `api-reference/` — API reference pages and the OpenAPI spec (`api-reference/openapi.yaml`)
- `docs/` — getting-started and product guides
- `billing/` — billing and pricing pages
- `integrations/` — MCP and OpenAI Agent Builder integration guides
- `use-cases/` — use cases and best practices

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview documentation changes locally:

```
npm i -g mintlify
```

Run the following command at the root of the repository (where `docs.json` is):

```
mintlify dev
```

## Publishing Changes

Changes are deployed to production automatically after pushing to the default branch (via the Mintlify GitHub App).

### Troubleshooting

- Mintlify dev isn't running — run `mintlify install` to re-install dependencies.
- Page loads as a 404 — make sure you are running in the folder with `docs.json`.

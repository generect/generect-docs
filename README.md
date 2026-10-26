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

## Response schemas and examples

Price catalogs (datacircle.dev and others) and AI agents read `openapi.yaml` literally. They count our fields from the response schema and the examples, and they quote billing sentences as promises. When the docs were thin or vague, the catalogs showed it: 12 fields for lead enrich instead of 67 to 87, 5 for search rows, and a "bounce refund" taken from one loose FAQ sentence. So:

- Every response schema lists its properties. "See the example for the field set" is not a schema.
- Field names, types and nullability come from a live response, not from memory or the code alone. Database, realtime and bulk return different extras, so check each route you document.
- Before merging, validate the live responses and the examples against the schema:

  ```
  pip install pyyaml openapi-spec-validator
  python3 -c "
  import json, sys, yaml
  from openapi_schema_validator import OAS30Validator
  spec = yaml.safe_load(open('api-reference/openapi.yaml')); sc = spec['components']['schemas']
  def res(o):
      if isinstance(o, dict):
          return res(sc[o['\$ref'].split('/')[-1]]) if '\$ref' in o else {k: res(v) for k, v in o.items()}
      return [res(x) for x in o] if isinstance(o, list) else o
  v = OAS30Validator(res(sc[sys.argv[1]]))
  rows = json.load(open(sys.argv[2]))
  rows = rows if isinstance(rows, list) else [rows]
  print(sum(len(list(v.iter_errors(r))) for r in rows), 'errors')
  " Lead response-data.json
  ```

- A billing sentence says what the API does, measured or read in the code. "Refund", "free" and "unlimited" get quoted.

## Publishing Changes

Changes are deployed to production automatically after pushing to the default branch (via the Mintlify GitHub App). Merging a PR into `master` publishes it.

`mint` needs Node 20.17 or newer. On a host with an older Node, run it as `npx -y -p node@22 -p mint@latest -- mint validate` (also `openapi-check`, `broken-links`).

### Troubleshooting

- Mintlify dev isn't running — run `mintlify install` to re-install dependencies.
- Page loads as a 404 — make sure you are running in the folder with `docs.json`.

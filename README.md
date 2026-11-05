# Slicebase

A source-linked comparison directory for tokenised real estate. React, TypeScript and Vite. No account sign-in, deposits, wallets, payments or investment execution.

## Run locally

Node.js 22 or newer and npm are required.

```sh
npm ci
npm run dev
```

## Check and build

```sh
npm test
npm run build
npm run preview
```

Production output: `dist/`. No environment variables or API keys are needed. This is a static frontend, not a live data feed.

## Deploy

Import this repository into Vercel or another static host. Use Vite, `npm run build`, output `dist`, Node 22. Deploy from the repository root. Deployment and domain setup are managed by the owner. No redirect configuration is needed for the single-page, hash-section navigation.

## Data and limitations

- Listings are re-read from the platforms about hourly (see docs/REFRESH.md); not live prices. First captured 4 November 2026.
- Source records come from Lofty and Oceanpoint (counts are in src/listings.json). Oceanpoint reports 77 properties but its public list shows fewer, so coverage is incomplete.
- Original source labels and values are retained. Lofty average yield and Oceanpoint APY are not treated as equivalent metrics or used to rank investments.
- Exact executable minimums, all property-specific costs, and personal/legal eligibility are not verified. Platform-wide terms are clearly separated from offering-specific terms.
- Country selection supplies context only, not access approval or filtering.
- The calculator uses independent user-entered assumptions. Its starting 8% is an example, not a property forecast. Costs start at $0 placeholders, not a fee-free claim.
- No guaranteed resale, return or capital protection is claimed.

See [data policy](docs/DATA.md) and [third-party notices](THIRD_PARTY_NOTICES.md). This is informational content, not investment, legal or tax advice.

## Structure

- `src/App.tsx`: directory, comparison, calculator and page sections
- `src/listings.json`: dated source records and unmodified metric strings
- `src/components/`: shared source-link component
- `src/photos/listings/`: one compressed source photo per record
- `src/fonts/`: self-hosted fonts and their licences
- `tests/`: snapshot and safety checks

No generated build output, credentials, private account exports or vendor dependencies are committed. This repository does not grant a licence to third-party listing data or photos.

Optional browser checks:

```sh
npx playwright install chromium
npm run build
npm run test:browser
```

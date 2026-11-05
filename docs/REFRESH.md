# Hourly refresh

`scripts/refresh.mjs` applies a marketplace sweep to `src/listings.json` and `src/meta.json`.
Sweeps are read from the platforms' public pages (Lofty: full grid incl. "Show more properties"; Oceanpoint: marketplace list with infinite scroll) and passed in as JSON.

- Price, avg yield and value tag come from the live Lofty card text, verbatim. Valuation and monthly rent come from the property page (Total Property Value, Monthly Rent). Oceanpoint status, valuation and APY come from the marketplace cards.
- Lofty's server-rendered property HTML shows its *current* yield as "Avg yield"; it is not used.
- Nothing is deleted. A listing absent from two consecutive complete sweeps gets `delisted: true` and a "No longer listed" label; it returns if it reappears.
- New Lofty listings are added with one photo. New Oceanpoint listings need manual photo handling and are reported, not auto-added.
- A failed or partial sweep changes nothing and does not move that platform's refresh date. The page states the older of the two platform dates.
- Oceanpoint reports 77 properties but its list shows 21; the other 56 are not available to capture.

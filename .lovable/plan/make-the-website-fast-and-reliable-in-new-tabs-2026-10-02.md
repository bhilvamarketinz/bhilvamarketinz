# Make the website fast and reliable in new tabs

## Changes
- Pre-render all six public pages as static HTML so their content appears immediately on refresh and in a new tab.
- Keep the Netlify deployment setting conditional, preserving both Netlify and Lovable preview compatibility.
- Remove the unused opening-curtain animation code and simplify first-load homepage motion where it delays visible content.
- Preserve working catalog dialogs, contact form, WhatsApp, email, and navigation interactions.

## Verification
- Confirm the static build writes HTML for every public page.
- Open the homepage and all navigation pages in fresh browser tabs at desktop and mobile sizes.
- Check that the homepage is visible immediately and that there are no page or console errors.

## Technical details
- Configure TanStack Start prerendering with explicit paths: `/`, `/about`, `/products`, `/why-choose-us`, `/supply`, and `/contact`.
- Disable automatic route discovery so only these visitor-independent pages are captured.
- Retain interactive JavaScript after the static HTML loads; this is a static site with client-side form/catalog enhancements.

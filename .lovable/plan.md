# Fix the blank-screen React hook error

## What I found
The failure is not caused by `useState` inside the header. The installed TanStack packages are on different release versions, so the development browser can load incompatible React/router module instances. This also explains the matching `useContext` failure inside the page head renderer.

## Changes
- Align TanStack Start, Router, and Router Plugin to one compatible release line.
- Refresh the dependency lockfile and development module cache through the package update.
- Preserve the existing static prerendering and conditional Netlify deployment settings.
- Verify the homepage in a fresh browser context, including a direct new-tab load.
- Confirm the build and browser console are error-free.

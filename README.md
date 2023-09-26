# Issue - Setting multiple cookies with the same name

Issues probably somewhere in here:
https://github.com/remix-run/remix/blob/main/packages/remix-express/server.ts

**NOTE**:
Broken in Node v18.12.1, but working as expected in v18.17.1.

Underlying issue may be the fact that a different global `Headers` implementations is loaded when using `remix-serve` (the `@remix-run/web-fetch` implementation) compared to a custom express server (default node implementation).

## 1. Working version (dev server)

Run `npm run headless:dev` to start using the in-built dev server.

Cookies are set correctly with that method.

## 2. Broken version (custom express server)

Run `npm run dev` to start using the custom express server.

Cookies are not set correctly with that method, combining them in the comma-delimited format, which is not understood by browsers.

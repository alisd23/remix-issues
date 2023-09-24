# Issue - Setting multiple cookies with the same name

Issues probably somewhere in here:
https://github.com/remix-run/remix/blob/main/packages/remix-express/server.ts

## 1. Working version (dev server)

Run `npm run headless:dev` to start using the in-built dev server.

Cookies are set correctly with that method.

## 2. Broken version (custom express server)

Run `npm run dev` to start using the custom express server.

Cookies are not set correctly with that method, combining them in the comma-delimited format, which is not understood by browsers.

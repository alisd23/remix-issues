# remix-dynamic-require-issue

1. Run `yarn`
2. Run `yarn dev`
3. Click "Without form" button to trigger a `fetcher.submit` call to the standalone at `/action` (or navigate page with link)
4. Notice that page reloads if any of the above happens, whenever a new route module is loaded

It seems like remix is failing to load the route bundle for any action/page, and is falling back to a full page reload every time.

Possible related issues:
https://github.com/evanw/esbuild/issues/506
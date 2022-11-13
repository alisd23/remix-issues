# remix-dynamic-require-issue

1. Run `yarn`
2. Run `yarn dev`
3. Click "Without form" button to trigger a `fetcher.submit` call to the standalone at `/action`
4. Notice that page reloads

It seems like remix is failing to load the route bundle for the action, and is falling back to a full page reload every time.
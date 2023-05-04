# Remix issue

1. Run `yarn`
2. Run `yarn dev`
4. Notice that build fails with an error when resolving a package (@jspm/core) via esbuild-plugin-polyfill-node

Cannot find package '@jspm/core' imported from XXX/.yarn/virtual/esbuild-plugin-polyfill-node-virtual-2dbb720e8d/0/cache/esbuild-plugin-polyfill-node-npm-0.2.0-2f43568deb-950f77f1ca.zip/node_modules/esbuild-plugin-polyfill-node/dist/index.cjs [plugin node-polyfills]

Some new dependencies were added: `esbuild-plugin-polyfill-node` and a new dependency of that, import-meta-resolve which seems to be the actual culprit.

Seems like import-meta-resolve just does straight up not work with Yarn PnP, and it doesn't sound like they can easily fix that - see this issue.
This is a repo to test out external assets in the build artifact for Next.js apps.

## Install, Build, Run

Build both the the exported static website, or the SSR node server.

```
# Install deps
yarn

# Build and export
nx export demo
nx build demo --prod
```

Then you can run the exported website:

```
npx serve dist/apps/demo/exported
```

Or the SSR server:

```
yarn --cwd dist/apps/demo start
```

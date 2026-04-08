# How to test web-components locally

This guide explains how to test changes in `web-components` from a consumer project (e.g. `jopit-landing`) without publishing to npm or the CDN.

## Why it doesn't work out of the box

Consumer projects use SystemJS + an import map that resolves `@jopitnow/web-components` from the CDN at runtime. Additionally, webpack marks it as an `external`, so it's never bundled from `node_modules`. This means installing a local `.tgz` alone has no effect.

Three things need to change temporarily:

1. **web-components webpack** - inline CSS and images into the JS bundle
2. **Consumer webpack** - remove `@jopitnow/web-components` from externals in standalone mode
3. **Consumer CSS** - comment out the `@import` that loads the CSS from the CDN

## Step by step

### 1. Adjust web-components webpack (this repo)

In `webpack.config.js`, make two temporary changes:

**CSS** - Replace `MiniCssExtractPlugin.loader` with `style-loader` so CSS is injected via JS instead of being extracted to a separate file:

```js
// Before
use: [MiniCssExtractPlugin.loader, "css-loader"]

// After
use: ["style-loader", "css-loader"]
```

Also remove `MiniCssExtractPlugin` from the `plugins` array.

**Images** - Change `asset` to `asset/inline` so images are inlined as base64 data URLs:

```js
// Before
type: "asset"

// After
type: "asset/inline"
```

### 2. Build and pack

```bash
npm run build
npm pack
```

This creates `jopitnow-web-components-0.0.0.tgz` in the project root.

### 3. Install in the consumer project

```bash
cd ../jopit-landing
npm install ../jopit-web-components/jopitnow-web-components-0.0.0.tgz
```

### 4. Adjust consumer webpack (e.g. jopit-landing)

In the consumer's `webpack.config.js`, remove `@jopitnow/web-components` from `externals` when running in standalone mode so webpack bundles it from `node_modules`:

```js
externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    "@jopitnow/web-toolkit": "@jopitnow/web-toolkit",
    ...(!isStandalone && { "@jopitnow/web-components": "@jopitnow/web-components" })
}
```

### 5. Comment out the CDN CSS import

In the consumer's root CSS file (e.g. `src/landing/ui/root.component.css`), comment out the CDN import:

```css
/* @import url("https://cdn.jsdelivr.net/gh/jopitnow/jopit-web-components@master/dist/index.css"); */
```

### 6. Fix CSS conflicts

`style-loader` injects web-components CSS into the DOM at runtime, which can override consumer styles. A known issue is `overflow-y: hidden` in `src/index.css` killing vertical scroll in the consumer.

If you run into unexpected style issues, check the consumer's CSS and add `!important` where needed. For example in `root.component.css`:

```css
html {
    overflow-y: auto !important;
}
```

### 7. Start the consumer

```bash
npm run start:staging
```

## Reverting

Before committing, revert all temporary changes:

- **web-components**: restore `MiniCssExtractPlugin.loader`, `asset`, and the plugin in `webpack.config.js`
- **Consumer**: restore the external, uncomment the CSS `@import`, and remove any `!important` overrides added for local testing

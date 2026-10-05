# sofrito

Sofrito is KAD's design system component library. It publishes a set of React components, design tokens, and a global stylesheet for use across KAD products.

## Development

### Storybook

The primary development environment is Storybook. Start it with:

```sh
pnpm dev
```

Storybook runs at `http://localhost:6006`.

### Build

Build the distributable package:

```sh
pnpm build
```

Output goes to `dist/`. The package exports a single JS entry point and a CSS stylesheet:

```ts
import { KADButton } from '@kad-products/sofrito';
import '@kad-products/sofrito/styles.css';
```

## Testing

### Visual tests (Playwright)

Component tests are visual regression screenshots. They use Playwright's `mount` fixture with a story gallery — each Storybook story has a corresponding Playwright test that screenshots it across Chromium, Firefox, and WebKit.

Run tests:

```sh
pnpm playwright:run
```

Open the interactive Playwright UI:

```sh
pnpm playwright:ui
```

Update snapshots for your local OS (darwin):

```sh
pnpm playwright:update
```

**Updating snapshots for CI (Linux):** Snapshots must be generated on Linux to match the CI container. Run this before committing new or updated snapshot files:

```sh
docker run --rm \
  -v $(pwd):/work/ \
  -v /work/node_modules \
  -w /work/ \
  mcr.microsoft.com/playwright:v1.63.0-noble \
  /bin/sh -c "npm install -g pnpm && pnpm install && pnpm playwright:update"
```

Then commit the updated snapshots alongside your changes.

## Lint and type checking

```sh
pnpm ci:lint      # runs biome, knip, prettier, and tsc
pnpm biome:fix    # auto-fix biome issues
pnpm prettier:fix # auto-fix formatting
```

## Component guide

See [src/components/readme.md](src/components/readme.md) for the full standards on file structure, component code, CSS conventions, stories, and visual tests.

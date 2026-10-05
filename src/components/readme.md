# Component Standards

This guide covers the conventions for every component in sofrito — structure, code, CSS, stories, and testing.

## File structure

Each component lives in its own directory under `src/components/`. The directory name, component file, CSS module, and stories file all share the same kebab-case base name.

```
src/components/
  button/
    button.tsx
    button.module.css
    button.stories.tsx
    button.ct.test.tsx
    button.ct.test.tsx-snapshots/   ← generated, committed to git
```

No `kad-` prefix on filenames — the prefix belongs only on the exported React identifier.

---

## Component code

### Directive and exports

Every component file starts with the Next.js `'use client'` directive. Components are `export default function` with a `KAD`-prefixed PascalCase name:

```tsx
'use client';

export default function KADButton({ ... }: KADButtonProps): React.ReactNode {
  ...
}
```

### Prop types

Define props as a named `type` export in the same file:

```tsx
export type KADButtonProps = {
  label: string;
  onClick?: () => void;
};
```

For components that wrap a native HTML element, spread its native attributes with `React.ComponentPropsWithoutRef`:

```tsx
export type KADButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  label: string;
};
```

### Return type

Always annotate the return type explicitly as `React.ReactNode`. Biome enforces this (`useExplicitType: error`).

### Imports

Use `import type` for all type-only imports (`verbatimModuleSyntax` is enabled):

```tsx
import type { KADTableColumn } from '@/types';
```

No `React` import is needed — the `react-jsx` transform is configured in `tsconfig.json`.

### Shared types

Types used across multiple components live in `src/types.ts` and are accessed via the `@/types` alias.

---

## CSS modules

### File and class naming

CSS classes use kebab-case prefixed with `kad-`:

```css
/* button/button.module.css */
.kad-button {
  background: var(--accent-8);
  color: white;
}

.kad-button:disabled {
  opacity: 0.5;
}
```

Because `vite.config.ts` sets `localsConvention: 'camelCaseOnly'`, kebab-case class names are accessed in camelCase in TSX. The import alias is conventionally named `styleClasses`:

```tsx
import styleClasses from './button.module.css';

<button className={styleClasses.kadButton} />
```

### Conditional classes

Use template literals for simple cases, or the `classnames` package for multiple conditions:

```tsx
// template literal
className={`${styleClasses.kadItem}${active ? ` ${styleClasses.kadItemActive}` : ''}`}

// classnames package
import classNames from 'classnames';
className={classNames(styleClasses.kadAvatarRoot, classNameRoot)}
```

### Design tokens

Colors and scales come from CSS custom properties defined in `src/styles/global.css`. Never use raw hex or rgb values in component CSS.

| Scale | Purpose |
|---|---|
| `--mauve-1` … `--mauve-12` | Neutral grays (slight purple tint) |
| `--violet-1` … `--violet-12` | Primary brand color |
| `--accent-1` … `--accent-12` | Alias for violet — prefer these in components |
| `--black-a1` … `--black-a4` | Black alpha overlays (5–20% opacity) |

```css
.kad-button {
  background: var(--accent-8);
}

.kad-button:hover {
  background: var(--accent-9);
}
```

Consuming apps must import the stylesheet:

```ts
import '@kad-products/sofrito/styles.css';
```

---

## Storybook stories

### File setup

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import KADFoo from './foo';

const meta: Meta<typeof KADFoo> = {
  component: KADFoo,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof KADFoo>;
```

Key rules:
- Import from `@storybook/react-vite`, not `@storybook/react`
- Always set `parameters: { layout: 'centered' }`
- Story names are PascalCase (`Default`, `WithEditAction`, `LongContent`)

### Simple stories

```tsx
export const Default: Story = {
  args: {
    label: 'Click me',
  },
};
```

### Stateful stories

Use a `render` function with `useState` when the component needs internal state:

```tsx
export const Default: Story = {
  render: () => {
    const [items, setItems] = useState(DEFAULT_ITEMS);
    return <KADSortableList items={items} onChange={setItems} />;
  },
};
```

### Callback spies

Use `fn()` from `storybook/test` for handler args so Storybook can observe calls:

```tsx
import { fn } from 'storybook/test';

export const WithDeleteAction: Story = {
  args: {
    onDelete: fn(),
  },
};
```

---

## Visual tests

Each component has a `[name].ct.test.tsx` alongside its other files. The test lists each story name and runs a screenshot comparison across Chromium, Firefox, and WebKit using Playwright's built-in `mount` fixture and the gallery at `playwright/gallery/`.

```ts
import { expect, test } from '@playwright/test';

const stories = ['Default', 'Empty', 'WithAction'] as const;

for (const name of stories) {
  test(name, async ({ mount }) => {
    const component = await mount(`components/foo/foo/${name}`);
    await expect(component).toHaveScreenshot();
  });
}
```

The story ID format is `'components/[dir]/[filename]/[ExportName]'`. The `stories` array should exactly mirror the named exports in the stories file.

Snapshots are committed to git in `[name].ct.test.tsx-snapshots/`. Run and update them via the commands in the root README.

---

## Barrel export

Add the new component and any exported types to `src/index.ts`:

```ts
'use client';
import KADFoo from './components/foo/foo';
// ... other imports

export type { KADFooProps } from './components/foo/foo';
export { KADFoo, /* ... */ };
```

Default imports are re-exported as named exports. Types are re-exported with `export type`.

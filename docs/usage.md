# Using sofrito

## Installation

```sh
npm install @kad-products/sofrito
```

Sofrito requires React 19 as a peer dependency.

## Importing

Import components by name from the package root, and import the stylesheet once at your app's entry point:

```ts
import { KADButton, KADFormInput } from '@kad-products/sofrito';
import '@kad-products/sofrito/styles.css';
```

The stylesheet import must happen once — it covers all components in the library.

## Destructuring

Form input components are grouped under the `KADFormInput` namespace rather than exported individually. Access them via dot notation:

```tsx
<KADFormInput.Text name="email" value={email} onChange={setEmail} onBlur={validate} />
<KADFormInput.Select options={options} value={selected} onChange={setSelected} />
```

You can also destructure from the namespace if you prefer:

```tsx
const { Text, Select } = KADFormInput;
```

## `use client`

Every sofrito component is marked `'use client'` at the file level. In a Next.js App Router app this means you do not need to add `'use client'` to your own component just because it renders a sofrito component — the directive is already present in the library.

If you create your own wrapper components around sofrito components and export them from a file that doesn't otherwise require client-side code, you still don't need to add `'use client'` — the boundary is established by the library itself.

## Styling

Sofrito ships a single compiled stylesheet. Import it once and all component styles are available:

```ts
import '@kad-products/sofrito/styles.css';
```

Components use scoped CSS modules internally, so there are no global class name collisions.

### Design tokens

The stylesheet exposes CSS custom properties you can reference in your own styles:

```css
/* Neutral scale */
--mauve-1 through --mauve-12

/* Primary (violet) */
--violet-1 through --violet-12
--accent-1 through --accent-12  /* alias for violet */

/* Error / destructive */
--red-1 through --red-12

/* Black alphas */
--black-a1 through --black-a9
```

Higher numbers are darker (following the Radix color scale convention).

## Component types

All `KADFormInput` components share a consistent onChange signature: the handler receives the extracted value directly, never a browser event.

### Text

```tsx
<KADFormInput.Text
    name="username"
    value={value}
    onChange={(value: string) => {}}
    onBlur={() => {}}
/>
```

### Textarea

```tsx
<KADFormInput.Textarea
    name="bio"
    value={value}
    onChange={(value: string) => {}}
    onBlur={() => {}}
/>
```

### Number

Value is always a `string` — the raw content of the input. Parse it when you need a numeric value.

```tsx
<KADFormInput.Number
    name="quantity"
    value={value}
    onChange={(value: string) => {}}
    onBlur={() => {}}
/>
```

### Date

Value is an ISO date string (`YYYY-MM-DD`).

```tsx
<KADFormInput.Date
    name="startDate"
    value={value}
    onChange={(value: string) => {}}
    onBlur={() => {}}
/>
```

### Switch

```tsx
<KADFormInput.Switch
    checked={checked}
    onChange={(checked: boolean) => {}}
/>
```

### Select

```tsx
<KADFormInput.Select
    options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
    ]}
    value={value}
    onChange={(value: string) => {}}
/>
```

### RadioGroup

```tsx
<KADFormInput.RadioGroup
    label="Preferred contact"
    options={[
        { value: 'email', label: 'Email' },
        { value: 'phone', label: 'Phone' },
    ]}
    value={value}
    onChange={(value: string) => {}}
/>
```

### CheckboxGroup

```tsx
<KADFormInput.CheckboxGroup
    options={[
        { value: 'mon', label: 'Monday' },
        { value: 'tue', label: 'Tuesday' },
    ]}
    value={selected}
    onChange={(values: string[]) => {}}
/>
```

### StringArray

A dynamic list of text inputs where each entry maps to one string in the array.

```tsx
<KADFormInput.StringArray
    name="tags"
    value={tags}
    onChange={(values: string[]) => {}}
    onBlur={() => {}}
/>
```

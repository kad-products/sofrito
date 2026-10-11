# TanStack Form integration

Sofrito form inputs are form-library agnostic — they expose `value`, `onChange`, and `onBlur` props and leave state management to the caller. This guide shows one way to wire them into [TanStack Form](https://tanstack.com/form) using its context-based field component pattern.

## Setup

Use `createFormHookContexts` and `createFormHook` to build typed field wrappers that you own in your app:

```ts
// src/form.ts
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import {
    TextInput,
    NumberInput,
    DateInput,
    TextareaInput,
    SwitchInput,
    SelectInput,
    RadioGroupInput,
    CheckboxGroupInput,
    StringArrayInput,
} from './form-fields';

export const { fieldContext, formContext, useFieldContext } =
    createFormHookContexts();

export const { useAppForm } = createFormHook({
    fieldContext,
    formContext,
    fieldComponents: {
        TextInput,
        NumberInput,
        DateInput,
        TextareaInput,
        SwitchInput,
        SelectInput,
        RadioGroupInput,
        CheckboxGroupInput,
        StringArrayInput,
    },
    formComponents: {},
});
```

## Field wrapper components

Each wrapper calls `useFieldContext` to get the field state and binds it to the sofrito component. The pattern is the same for every input type.

```tsx
// src/form-fields.tsx
'use client';
import { KADFormInput } from '@kad-products/sofrito';
import { useFieldContext } from './form';

export function TextInput({ label }: { label: string }) {
    const field = useFieldContext<string>();
    return (
        <KADFormInput.Text
            name={field.name}
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
        />
    );
}

export function NumberInput({ label }: { label: string }) {
    const field = useFieldContext<string>();
    return (
        <KADFormInput.Number
            name={field.name}
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
        />
    );
}

export function DateInput({ label }: { label: string }) {
    const field = useFieldContext<string>();
    return (
        <KADFormInput.Date
            name={field.name}
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
        />
    );
}

export function TextareaInput({ label }: { label: string }) {
    const field = useFieldContext<string>();
    return (
        <KADFormInput.Textarea
            name={field.name}
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
        />
    );
}

export function SwitchInput({ label }: { label: string }) {
    const field = useFieldContext<boolean>();
    return (
        <KADFormInput.Switch
            checked={field.state.value}
            onChange={value => {
                field.handleChange(value);
                field.handleBlur();
            }}
        />
    );
}

export function SelectInput({
    label,
    options,
}: {
    label: string;
    options: Array<{ value: string; label: string }>;
}) {
    const field = useFieldContext<string>();
    return (
        <KADFormInput.Select
            options={options}
            value={field.state.value}
            onChange={value => {
                field.handleChange(value);
                field.handleBlur();
            }}
        />
    );
}

export function RadioGroupInput({
    label,
    options,
}: {
    label: string;
    options: Array<{ value: string; label: string }>;
}) {
    const field = useFieldContext<string>();
    return (
        <KADFormInput.RadioGroup
            label={label}
            options={options}
            value={field.state.value}
            onChange={value => {
                field.handleChange(value);
                field.handleBlur();
            }}
        />
    );
}

export function CheckboxGroupInput({
    label,
    options,
}: {
    label: string;
    options: Array<{ value: string; label: string }>;
}) {
    const field = useFieldContext<string[]>();
    return (
        <KADFormInput.CheckboxGroup
            options={options}
            value={field.state.value}
            onChange={values => {
                field.handleChange(values);
                field.handleBlur();
            }}
        />
    );
}

export function StringArrayInput({ label }: { label: string }) {
    const field = useFieldContext<string[]>();
    return (
        <KADFormInput.StringArray
            name={field.name}
            value={field.state.value}
            onChange={field.handleChange}
            onBlur={field.handleBlur}
        />
    );
}
```

### onBlur timing

Text-based inputs (`Text`, `Textarea`, `Number`, `Date`, `StringArray`) have a native `onBlur` event that TanStack Form can subscribe to directly, so `field.handleChange` and `field.handleBlur` are wired separately.

Picker-style inputs (`Switch`, `Select`, `RadioGroup`, `CheckboxGroup`) don't have a natural blur event, so `handleBlur` is called inside the `onChange` handler immediately after the value changes.

## Using the form

With the wrappers registered, `useAppForm` gives you a typed form instance:

```tsx
'use client';
import { useAppForm } from './form';

export function ProfileForm() {
    const form = useAppForm({
        defaultValues: {
            name: '',
            bio: '',
            age: '',
            startDate: '',
            active: false,
            role: '',
            contact: '',
            interests: [] as string[],
            tags: [] as string[],
        },
        onSubmit: async ({ value }) => {
            await saveProfile(value);
        },
    });

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                form.handleSubmit();
            }}
        >
            <form.AppField name="name" children={f => <f.TextInput label="Name" />} />
            <form.AppField name="bio" children={f => <f.TextareaInput label="Bio" />} />
            <form.AppField name="age" children={f => <f.NumberInput label="Age" />} />
            <form.AppField name="startDate" children={f => <f.DateInput label="Start date" />} />
            <form.AppField name="active" children={f => <f.SwitchInput label="Active" />} />
            <form.AppField
                name="role"
                children={f => (
                    <f.SelectInput
                        label="Role"
                        options={[
                            { value: 'admin', label: 'Admin' },
                            { value: 'member', label: 'Member' },
                        ]}
                    />
                )}
            />
            <form.AppField
                name="contact"
                children={f => (
                    <f.RadioGroupInput
                        label="Preferred contact"
                        options={[
                            { value: 'email', label: 'Email' },
                            { value: 'phone', label: 'Phone' },
                        ]}
                    />
                )}
            />
            <form.AppField
                name="interests"
                children={f => (
                    <f.CheckboxGroupInput
                        label="Interests"
                        options={[
                            { value: 'design', label: 'Design' },
                            { value: 'engineering', label: 'Engineering' },
                        ]}
                    />
                )}
            />
            <form.AppField name="tags" children={f => <f.StringArrayInput label="Tags" />} />
            <button type="submit">Save</button>
        </form>
    );
}
```

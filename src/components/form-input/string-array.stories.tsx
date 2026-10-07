import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { StringArray } from './string-array';

const meta: Meta<typeof StringArray> = {
	component: StringArray,
	parameters: {
		layout: 'centered',
	},
	args: {
		name: 'tags',
		onBlur: () => {},
	},
	render: args => {
		const [value, setValue] = useState<string[]>(args.value ?? []);
		return <StringArray {...args} value={value} onChange={setValue} />;
	},
};

export default meta;

type Story = StoryObj<typeof StringArray>;

export const Empty: Story = {
	args: {
		value: [],
	},
};

export const WithItems: Story = {
	args: {
		value: ['quick-meal', 'vegetarian'],
	},
};

export const ManyItems: Story = {
	args: {
		value: ['quick-meal', 'vegetarian', 'gluten-free', 'low-calorie', 'mediterranean'],
	},
};

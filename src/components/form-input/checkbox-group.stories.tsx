import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { CheckboxGroup } from './checkbox-group';

const dietaryOptions = [
	{ value: 'vegan', label: 'Vegan' },
	{ value: 'gluten-free', label: 'Gluten-free' },
	{ value: 'nut-free', label: 'Nut-free' },
	{ value: 'dairy-free', label: 'Dairy-free' },
];

const meta: Meta<typeof CheckboxGroup> = {
	component: CheckboxGroup,
	parameters: {
		layout: 'centered',
	},
	args: {
		options: dietaryOptions,
	},
	render: args => {
		const [value, setValue] = useState<string[]>(args.value ?? []);
		return <CheckboxGroup {...args} value={value} onChange={setValue} />;
	},
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const NoneChecked: Story = {
	args: {
		value: [],
	},
};

export const SomeChecked: Story = {
	args: {
		value: ['vegan', 'nut-free'],
	},
};

export const AllChecked: Story = {
	args: {
		value: ['vegan', 'gluten-free', 'nut-free', 'dairy-free'],
	},
};

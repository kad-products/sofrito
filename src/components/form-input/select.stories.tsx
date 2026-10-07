import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select } from './select';

const cuisineOptions = [
	{ value: 'italian', label: 'Italian' },
	{ value: 'indian', label: 'Indian' },
	{ value: 'japanese', label: 'Japanese' },
	{ value: 'mexican', label: 'Mexican' },
];

const meta: Meta<typeof Select> = {
	component: Select,
	parameters: {
		layout: 'centered',
	},
	args: {
		options: cuisineOptions,
	},
	render: args => {
		const [value, setValue] = useState(args.value ?? '');
		return <Select {...args} value={value} onChange={setValue} />;
	},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Unselected: Story = {
	args: {
		value: '',
	},
};

export const WithValue: Story = {
	args: {
		value: 'indian',
	},
};

export const ManyOptions: Story = {
	args: {
		value: '',
		options: [
			{ value: 'italian', label: 'Italian' },
			{ value: 'indian', label: 'Indian' },
			{ value: 'japanese', label: 'Japanese' },
			{ value: 'mexican', label: 'Mexican' },
			{ value: 'thai', label: 'Thai' },
			{ value: 'french', label: 'French' },
			{ value: 'greek', label: 'Greek' },
			{ value: 'spanish', label: 'Spanish' },
			{ value: 'vietnamese', label: 'Vietnamese' },
			{ value: 'korean', label: 'Korean' },
		],
	},
};

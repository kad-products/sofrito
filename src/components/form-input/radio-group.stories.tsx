import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RadioGroup } from './radio-group';

const difficultyOptions = [
	{ value: 'easy', label: 'Easy' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'hard', label: 'Hard' },
];

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
	parameters: {
		layout: 'centered',
	},
	args: {
		label: 'Difficulty',
		options: difficultyOptions,
	},
	render: args => {
		const [value, setValue] = useState(args.value ?? '');
		return <RadioGroup {...args} value={value} onChange={setValue} />;
	},
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Unselected: Story = {
	args: {
		value: '',
	},
};

export const WithValue: Story = {
	args: {
		value: 'medium',
	},
};

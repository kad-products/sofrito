import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	render: args => {
		const [checked, setChecked] = useState(args.checked ?? false);
		return <Switch {...args} checked={checked} onChange={setChecked} />;
	},
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Off: Story = {
	args: {
		checked: false,
	},
};

export const On: Story = {
	args: {
		checked: true,
	},
};

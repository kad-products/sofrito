import type { Meta, StoryObj } from '@storybook/react-vite';
// biome-ignore lint/suspicious/noShadowRestrictedNames: intentional namespace sub-component name
import { Date } from './date';

const meta: Meta<typeof Date> = {
	component: Date,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof Date>;

export const Empty: Story = {
	args: {
		name: 'published-date',
		value: '',
		onChange: () => {},
		onBlur: () => {},
	},
};

export const WithValue: Story = {
	args: {
		name: 'published-date',
		value: '2024-03-15',
		onChange: () => {},
		onBlur: () => {},
	},
};

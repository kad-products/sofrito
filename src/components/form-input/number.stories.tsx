import type { Meta, StoryObj } from '@storybook/react-vite';
// biome-ignore lint/suspicious/noShadowRestrictedNames: intentional namespace sub-component name
import { Number } from './number';

const meta: Meta<typeof Number> = {
	component: Number,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof Number>;

export const Empty: Story = {
	args: {
		name: 'servings',
		value: '',
		onChange: () => {},
		onBlur: () => {},
	},
};

export const WithValue: Story = {
	args: {
		name: 'servings',
		value: '4',
		onChange: () => {},
		onBlur: () => {},
	},
};

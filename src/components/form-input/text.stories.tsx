import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './text';

const meta: Meta<typeof Text> = {
	component: Text,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Empty: Story = {
	args: {
		name: 'recipe-name',
		value: '',
		onChange: () => {},
		onBlur: () => {},
	},
};

export const WithValue: Story = {
	args: {
		name: 'recipe-name',
		value: 'Chicken Tikka Masala',
		onChange: () => {},
		onBlur: () => {},
	},
};

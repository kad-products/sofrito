import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta: Meta<typeof Textarea> = {
	component: Textarea,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Empty: Story = {
	args: {
		name: 'instructions',
		value: '',
		onChange: () => {},
		onBlur: () => {},
	},
};

export const WithValue: Story = {
	args: {
		name: 'instructions',
		value: 'Marinate the chicken in yogurt and spices for at least 2 hours, then grill over high heat until charred.',
		onChange: () => {},
		onBlur: () => {},
	},
};

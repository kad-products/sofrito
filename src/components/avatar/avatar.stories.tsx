import type { Meta, StoryObj } from '@storybook/react-vite';
import KADAvatar from './avatar';

const meta: Meta<typeof KADAvatar> = {
	component: KADAvatar,
	parameters: {
		layout: 'centered',
	},
	args: {
		classNameRoot: '',
	},
};

export default meta;

type Story = StoryObj<typeof KADAvatar>;

export const WithUser: Story = {
	args: {
		user: {
			username: 'adam',
			avatarUrl:
				'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="128" height="128"%3E%3Crect width="128" height="128" fill="%238B5CF6"/%3E%3Ctext x="64" y="80" font-size="64" text-anchor="middle" fill="white" font-family="sans-serif"%3EA%3C/text%3E%3C/svg%3E',
		},
	},
};

export const WithUserNoAvatar: Story = {
	args: {
		user: { username: 'adam' },
	},
};

export const NoUser: Story = {
	args: {
		user: undefined,
	},
};

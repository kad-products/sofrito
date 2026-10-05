import type { Meta, StoryObj } from '@storybook/react-vite';
import KADPopMenu from './pop-menu';

const meta: Meta<typeof KADPopMenu> = {
	component: KADPopMenu,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof KADPopMenu>;

const allItems = [
	{ href: '/recipes/1', label: 'View', requiredPermission: '__controls:read' },
	{ href: '/recipes/1/edit', label: 'Edit', requiredPermission: 'recipes:update' },
	{ href: '/recipes/1/delete', label: 'Delete', requiredPermission: 'recipes:delete' },
];

export const Default: Story = {
	args: {
		items: allItems,
		userPermissions: ['__controls:read', 'recipes:update', 'recipes:delete'],
	},
};

export const PartialPermissions: Story = {
	args: {
		items: allItems,
		userPermissions: ['__controls:read'],
	},
};

export const SingleItem: Story = {
	args: {
		items: [{ href: '/recipes/1', label: 'View Recipe', requiredPermission: '__controls:read' }],
		userPermissions: ['__controls:read'],
	},
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import KADPagination from './pagination';

const meta: Meta<typeof KADPagination> = {
	component: KADPagination,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof KADPagination>;

export const Default: Story = {
	args: {
		currentPage: 3,
		totalCount: 50,
		perPage: 10,
		href: '/recipes',
	},
};

export const FirstPage: Story = {
	args: {
		currentPage: 1,
		totalCount: 50,
		perPage: 10,
		href: '/recipes',
	},
};

export const LastPage: Story = {
	args: {
		currentPage: 5,
		totalCount: 50,
		perPage: 10,
		href: '/recipes',
	},
};

export const TwoPages: Story = {
	args: {
		currentPage: 1,
		totalCount: 20,
		perPage: 10,
		href: '/recipes',
	},
};

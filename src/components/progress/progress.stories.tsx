import type { Meta, StoryObj } from '@storybook/react-vite';
import KADProgress from './progress';

const meta: Meta<typeof KADProgress> = {
	component: KADProgress,
	parameters: {
		layout: 'centered',
	},
};

export default meta;

type Story = StoryObj<typeof KADProgress>;

export const QuarterDone: Story = {
	args: {
		progressPcnt: 25,
	},
};

export const HalfDone: Story = {
	args: {
		progressPcnt: 50,
	},
};

export const MostlyDone: Story = {
	args: {
		progressPcnt: 75,
	},
};

export const Complete: Story = {
	args: {
		progressPcnt: 100,
	},
};

export const Empty: Story = {
	args: {
		progressPcnt: 0,
	},
};

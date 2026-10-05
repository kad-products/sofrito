import { expect, test } from '@playwright/test';

const stories = ['Default', 'FirstPage', 'LastPage', 'TwoPages'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/pagination/pagination/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

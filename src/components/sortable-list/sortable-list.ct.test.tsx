import { expect, test } from '@playwright/test';

const stories = ['Default', 'LongContent', 'SingleItem'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/sortable-list/sortable-list/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

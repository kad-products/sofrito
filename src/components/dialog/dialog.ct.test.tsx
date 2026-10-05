import { expect, test } from '@playwright/test';

const stories = ['Default', 'NoDescription', 'LongContent'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/dialog/dialog/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

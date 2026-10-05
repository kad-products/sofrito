import { expect, test } from '@playwright/test';

const stories = ['Default', 'Submitting', 'LongLabel'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/button/button/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

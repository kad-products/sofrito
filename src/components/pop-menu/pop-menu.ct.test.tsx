import { expect, test } from '@playwright/test';

const stories = ['Default', 'PartialPermissions', 'SingleItem'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/pop-menu/pop-menu/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

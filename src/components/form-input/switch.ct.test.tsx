import { expect, test } from '@playwright/test';

const stories = ['Off', 'On'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/form-input/switch/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

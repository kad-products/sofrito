import { expect, test } from '@playwright/test';

const stories = ['Empty', 'WithItems', 'ManyItems'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/form-input/string-array/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

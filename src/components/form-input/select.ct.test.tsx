import { expect, test } from '@playwright/test';

const stories = ['Unselected', 'WithValue', 'ManyOptions'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/form-input/select/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

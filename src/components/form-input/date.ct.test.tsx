import { expect, test } from '@playwright/test';

const stories = ['Empty', 'WithValue'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/form-input/date/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

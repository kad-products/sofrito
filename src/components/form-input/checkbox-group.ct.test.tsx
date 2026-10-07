import { expect, test } from '@playwright/test';

const stories = ['NoneChecked', 'SomeChecked', 'AllChecked'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/form-input/checkbox-group/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

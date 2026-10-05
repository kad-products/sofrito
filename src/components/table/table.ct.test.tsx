import { expect, test } from '@playwright/test';

const stories = ['Default', 'Empty', 'WithEditAction', 'WithButtonAction', 'ActionsHidden', 'WithCustomRender'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/table/table/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

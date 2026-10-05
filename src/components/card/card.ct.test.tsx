import { expect, test } from '@playwright/test';

const stories = ['Default', 'WithBody', 'ReactNodeBody', 'ActionsHidden', 'NoActions', 'WithHtml'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/card/card/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

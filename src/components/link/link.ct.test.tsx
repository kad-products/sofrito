import { expect, test } from '@playwright/test';

const stories = ['Visible', 'ExternalLink', 'JSXLabel'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/link/link/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

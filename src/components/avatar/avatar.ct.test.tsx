import { expect, test } from '@playwright/test';

const stories = ['WithUser', 'WithUserNoAvatar', 'NoUser'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/avatar/avatar/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

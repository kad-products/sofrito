import { expect, test } from '@playwright/test';

const stories = ['QuarterDone', 'HalfDone', 'MostlyDone', 'Complete', 'Empty'] as const;

for (const name of stories) {
	test(name, async ({ mount }) => {
		const component = await mount(`components/progress/progress/${name}`);
		await expect(component).toHaveScreenshot();
	});
}

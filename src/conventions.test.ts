import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { basename, dirname, join, relative } from 'node:path';
import { describe, expect, it } from 'vitest';

const COMPONENTS_DIR = join(__dirname, 'components');

function getStoryFiles(): string[] {
	return (readdirSync(COMPONENTS_DIR, { recursive: true, withFileTypes: true }) as import('fs').Dirent[])
		.filter(e => e.isFile() && e.name.endsWith('.stories.tsx'))
		.map(e => join(e.parentPath, e.name));
}

function read(p: string): string {
	return readFileSync(p, 'utf-8');
}

function rel(p: string): string {
	return relative(COMPONENTS_DIR, p);
}

// Extract named story exports (excludes `default`)
function storyExports(filePath: string): string[] {
	return [...read(filePath).matchAll(/^export const (\w+):/gm)].map(m => m[1]);
}

// Extract the `stories` array from a .ct.test.tsx file
function testStories(filePath: string): string[] {
	const match = read(filePath).match(/const stories = \[([\s\S]*?)\] as const/);
	if (!match) return [];
	return [...match[1].matchAll(/'(\w+)'/g)].map(m => m[1]);
}

const storyFiles = getStoryFiles();

describe('component visual tests', () => {
	it('every stories file has a corresponding .ct.test.tsx', () => {
		const bad = storyFiles.filter(f => !existsSync(join(dirname(f), `${basename(f, '.stories.tsx')}.ct.test.tsx`)));
		expect(bad.map(rel), 'Missing .ct.test.tsx').toStrictEqual([]);
	});

	it('every story export appears in the .ct.test.tsx stories array', () => {
		const bad: string[] = [];
		for (const storyFile of storyFiles) {
			const testFile = join(dirname(storyFile), `${basename(storyFile, '.stories.tsx')}.ct.test.tsx`);
			if (!existsSync(testFile)) continue;
			const missing = storyExports(storyFile).filter(name => !testStories(testFile).includes(name));
			if (missing.length > 0) bad.push(`${rel(storyFile)}: missing from test array: ${missing.join(', ')}`);
		}
		expect(bad, 'Story exports not covered by visual tests').toStrictEqual([]);
	});

	it('every item in the .ct.test.tsx stories array has a matching story export', () => {
		const bad: string[] = [];
		for (const storyFile of storyFiles) {
			const testFile = join(dirname(storyFile), `${basename(storyFile, '.stories.tsx')}.ct.test.tsx`);
			if (!existsSync(testFile)) continue;
			const extra = testStories(testFile).filter(name => !storyExports(storyFile).includes(name));
			if (extra.length > 0) bad.push(`${rel(testFile)}: not a story export: ${extra.join(', ')}`);
		}
		expect(bad, 'Test array contains names with no matching story export').toStrictEqual([]);
	});
});

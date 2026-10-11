'use client';

// biome-ignore lint/suspicious/noShadowRestrictedNames: intentional namespace sub-component name
export function Date({
	name,
	value,
	onBlur,
	onChange,
}: {
	name: string;
	value: string;
	onBlur: () => void;
	onChange: (value: string) => void;
}): React.ReactNode {
	return (
		<input
			id={name}
			type="date"
			name={name}
			value={value}
			onBlur={onBlur}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
		/>
	);
}

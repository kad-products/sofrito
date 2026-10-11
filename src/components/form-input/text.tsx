'use client';

export function Text({
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
			type="text"
			name={name}
			value={value}
			onBlur={onBlur}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
		/>
	);
}

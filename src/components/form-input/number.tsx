'use client';

// biome-ignore lint/suspicious/noShadowRestrictedNames: intentional namespace sub-component name
export function Number({
	name,
	value,
	onBlur,
	onChange,
}: {
	name: string;
	value: string;
	onBlur: React.FocusEventHandler<HTMLInputElement>;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}): React.ReactNode {
	return <input id={name} type="number" name={name} value={value} onBlur={onBlur} onChange={onChange} />;
}

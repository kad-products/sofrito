'use client';

export function CheckboxGroup({
	options,
	value,
	onChange,
}: {
	options: Array<{ value: string; label: string }>;
	value: string[];
	onChange: (value: string[]) => void;
}): React.ReactNode {
	return (
		<>
			{options.map(option => (
				<label key={option.value}>
					<input
						type="checkbox"
						checked={value.includes(option.value)}
						value={option.value}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							if (e.target.checked) {
								onChange([...value, option.value]);
							} else {
								onChange(value.filter(v => v !== option.value));
							}
						}}
					/>
					{option.label}
				</label>
			))}
		</>
	);
}

'use client';
import styleClasses from './textarea.module.css';

export function Textarea({
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
		<textarea
			id={name}
			className={styleClasses.kadTextarea}
			name={name}
			value={value}
			onBlur={onBlur}
			onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
		/>
	);
}

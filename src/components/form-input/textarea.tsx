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
	onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}): React.ReactNode {
	return (
		<textarea id={name} className={styleClasses.kadTextarea} name={name} value={value} onBlur={onBlur} onChange={onChange} />
	);
}

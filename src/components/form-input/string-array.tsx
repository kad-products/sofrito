'use client';
import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import styleClasses from './string-array.module.css';

export function StringArray({
	name,
	value,
	onBlur,
	onChange,
}: {
	name: string;
	value: string[];
	onBlur: () => void;
	onChange: (value: string[]) => void;
}): React.ReactNode {
	return (
		<div className={styleClasses.kadStringArray}>
			{value.map((item, idx) => (
				<div key={item} className={styleClasses.kadStringArrayRow}>
					<input
						type="text"
						name={`${name}[${idx}]`}
						value={item}
						onBlur={onBlur}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							const next = [...value];
							next[idx] = e.target.value;
							onChange(next);
						}}
					/>
					<button
						type="button"
						className={styleClasses.kadStringArrayRemove}
						aria-label="Remove item"
						onClick={() => {
							onChange(value.filter((_, i) => i !== idx));
							onBlur();
						}}
					>
						<Cross2Icon />
					</button>
				</div>
			))}
			<button type="button" className={styleClasses.kadStringArrayAdd} onClick={() => onChange([...value, ''])}>
				<PlusIcon />
				Add
			</button>
		</div>
	);
}

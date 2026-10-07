'use client';
import { RadioGroup as RadixRadioGroup } from 'radix-ui';
import styleClasses from './radio-group.module.css';

export function RadioGroup({
	label,
	options,
	value,
	onChange,
}: {
	label: string;
	options: Array<{ value: string; label: string }>;
	value: string;
	onChange: (value: string) => void;
}): React.ReactNode {
	return (
		<RadixRadioGroup.Root className={styleClasses.kadRadioGroupRoot} value={value} aria-label={label} onValueChange={onChange}>
			{options.map(option => (
				<div style={{ display: 'flex', alignItems: 'center' }} key={option.value}>
					<RadixRadioGroup.Item className={styleClasses.kadRadioGroupItem} value={option.value} id={`r${option.value}`}>
						<RadixRadioGroup.Indicator className={styleClasses.kadRadioGroupIndicator} />
					</RadixRadioGroup.Item>
					<label className={styleClasses.kadRadioGroupLabel} htmlFor={`r${option.value}`}>
						{option.label}
					</label>
				</div>
			))}
		</RadixRadioGroup.Root>
	);
}

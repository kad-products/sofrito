'use client';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Select as RadixSelect } from 'radix-ui';
import styleClasses from './select.module.css';

export function Select({
	value,
	onChange,
	options,
	...props
}: {
	value: string;
	onChange: (value: string) => void;
	options: Array<{ value: string; label: string }>;
} & React.ComponentPropsWithoutRef<typeof RadixSelect.Root>): React.ReactNode {
	return (
		<RadixSelect.Root {...props} onValueChange={onChange} value={value}>
			<RadixSelect.Trigger className={styleClasses.kadSelectTrigger}>
				<RadixSelect.Value placeholder="Select an option" />
				<RadixSelect.Icon className={styleClasses.kadSelectIcon}>
					<ChevronDownIcon />
				</RadixSelect.Icon>
			</RadixSelect.Trigger>
			<RadixSelect.Content className={styleClasses.kadSelectContent}>
				<RadixSelect.Viewport className={styleClasses.kadSelectViewport}>
					{options.map(option => (
						<RadixSelect.Item key={option.value} value={option.value} className={styleClasses.kadSelectItem}>
							<RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
							<RadixSelect.ItemIndicator className={styleClasses.kadSelectItemIndicator} />
						</RadixSelect.Item>
					))}
				</RadixSelect.Viewport>
			</RadixSelect.Content>
		</RadixSelect.Root>
	);
}

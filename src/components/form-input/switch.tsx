'use client';
import { Switch as RadixSwitch } from 'radix-ui';
import styleClasses from './switch.module.css';

export function Switch({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }): React.ReactNode {
	return (
		<RadixSwitch.Root checked={checked} onCheckedChange={onChange} className={styleClasses.kadSwitchRoot}>
			<RadixSwitch.Thumb className={styleClasses.kadSwitchThumb} />
		</RadixSwitch.Root>
	);
}

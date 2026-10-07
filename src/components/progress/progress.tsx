'use client';
import { Progress } from 'radix-ui';
import styleClasses from './progress.module.css';

export type KADProgressProps = {
	progressPcnt: number;
};

export default function KADProgress({ progressPcnt }: KADProgressProps): React.ReactNode {
	return (
		<Progress.Root className={styleClasses.kadProgressRoot} value={progressPcnt}>
			<Progress.Indicator
				className={styleClasses.kadProgressIndicator}
				style={{ transform: `translateX(-${100 - progressPcnt}%)` }}
			/>
		</Progress.Root>
	);
}

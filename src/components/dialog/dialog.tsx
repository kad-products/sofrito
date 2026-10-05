'use client';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Dialog } from 'radix-ui';
import styleClasses from './dialog.module.css';

export type KADDialogProps = {
	trigger: React.ReactNode;
	title: string;
	description?: string;
	children: React.ReactNode;
};

export default function KADDialog({ trigger, title, description, children }: KADDialogProps): React.ReactNode {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className={styleClasses.kadDialogOverlay} />
				<Dialog.Content className={styleClasses.kadDialogContent}>
					<Dialog.Title className={styleClasses.kadDialogTitle}>{title}</Dialog.Title>
					{description && <Dialog.Description className={styleClasses.kadDialogDescription}>{description}</Dialog.Description>}
					{children}
					<Dialog.Close asChild>
						<button type="button" className={styleClasses.kadDialogClose} aria-label="Close">
							<Cross2Icon />
						</button>
					</Dialog.Close>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

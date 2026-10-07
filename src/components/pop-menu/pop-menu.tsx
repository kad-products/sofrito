'use client';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from 'radix-ui';
import type { KADLinkItem, Permission } from '@/types';
import KADLink from '../link/link';
import styleClasses from './pop-menu.module.css';

export type KADPopMenuProps = {
	items: KADLinkItem[];
	userPermissions: Permission[];
};

export default function KADPopMenu({ items, userPermissions }: KADPopMenuProps): React.ReactNode {
	const permittedItems = items.filter(i => i.requiredPermission && userPermissions?.includes(i.requiredPermission));

	if (permittedItems.length === 0) return null;

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button type="button" className={styleClasses.kadPopMenuTrigger} aria-label="Menu">
					<HamburgerMenuIcon />
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content className={styleClasses.kadPopMenuContent}>
					{permittedItems.map(a => (
						<DropdownMenu.Item key={a.href} className={styleClasses.kadPopMenuItem} asChild>
							<KADLink userPermissions={userPermissions} {...a} />
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}

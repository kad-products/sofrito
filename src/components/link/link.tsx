'use client';
import type { KADLinkItem, Permission } from '@/types';

export type KADLinkProps = KADLinkItem & {
	userPermissions: Permission[];
};

export default function KADLink({ label, requiredPermission, userPermissions, ...other }: KADLinkProps): React.ReactNode {
	if (requiredPermission && !userPermissions?.includes(requiredPermission)) {
		return null;
	}
	return <a {...other}>{label}</a>;
}

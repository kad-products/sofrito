'use client';
import type { KADLinkItem, Permission } from '@/types';
import KADLink from '../link/link';
import styleClasses from './card.module.css';

export type KADCardProps = {
	title: string;
	body?: string | React.ReactNode;
	actions: KADLinkItem[];
	userPermissions: Permission[];
};

export default function KADCard({ title, body, actions, userPermissions }: KADCardProps): React.ReactNode {
	return (
		<div className={styleClasses.kadCard}>
			<div className={styleClasses.kadCardTitle}>{title}</div>
			{body && <div className={styleClasses.kadCardBody}>{body}</div>}
			<div className={styleClasses.kadCardActions}>
				{actions.map(a => (
					<KADLink key={a.href} userPermissions={userPermissions} {...a} />
				))}
			</div>
		</div>
	);
}

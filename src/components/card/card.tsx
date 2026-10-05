'use client';
import type { KADLinkItem, Permission } from '@/types';
import KADLink from '../link/link';
import styleClasses from './card.module.css';

export type KADCardProps = {
	title: string;
	body?: string | React.ReactNode;
	html?: string;
	actions?: KADLinkItem[];
	userPermissions?: Permission[];
};

export default function KADCard({ title, body, html, actions, userPermissions }: KADCardProps): React.ReactNode {
	return (
		<div className={styleClasses.kadCard}>
			<div className={styleClasses.kadCardTitle}>{title}</div>
			{body && <div className={styleClasses.kadCardBody}>{body}</div>}
			{/* biome-ignore lint/security/noDangerouslySetInnerHtml: content from markdown requires this */}
			{html && <div className={styleClasses.kadCardHtml} dangerouslySetInnerHTML={{ __html: html }} />}
			<div className={styleClasses.kadCardActions}>
				{actions?.map(a => (
					<KADLink key={a.href} userPermissions={userPermissions ?? []} {...a} />
				))}
			</div>
		</div>
	);
}

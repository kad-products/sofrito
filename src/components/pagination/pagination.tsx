'use client';
import styleClasses from './pagination.module.css';

export type KADPaginationProps = {
	currentPage: number;
	totalCount: number;
	perPage: number;
	href: string;
};

export default function KADPagination({ currentPage, totalCount, perPage, href }: KADPaginationProps): React.ReactNode {
	const pages = Math.ceil(totalCount / perPage);
	if (pages === 1) {
		return null;
	}
	const links = Array.from(Array(pages)).map((_, idx) => idx + 1);
	return (
		<div className={styleClasses.kadPagination}>
			{links.map(pgNum => {
				if (pgNum === currentPage) {
					return <span key={pgNum}>{pgNum}</span>;
				}
				return (
					<a key={pgNum} href={`${href}?page=${pgNum}`}>
						{pgNum}
					</a>
				);
			})}
		</div>
	);
}

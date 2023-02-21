import { FC, PropsWithChildren } from 'react';

import './base-view.scss';

export interface BaseViewProps extends React.HTMLAttributes<HTMLDivElement> {
	bg?: string;
}

export const BaseView: FC<PropsWithChildren<BaseViewProps>> = ({
	children,
	className,
	bg = '',
}) => (
	<div className={`base-view-wrapper ${bg}`}>
		<div className={`base-view-child ${className ?? ''}`}>{children}</div>
	</div>
);

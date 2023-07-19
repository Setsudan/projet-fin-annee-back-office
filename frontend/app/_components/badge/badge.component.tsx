import Image from 'next/image';
import React from 'react';
import './badge.styles.scss';

export default function Badge({
	type,
	icon,
	onClick,
}: {
  type:
    | 'primary'
    | 'secondary'
    | 'alert'
    | 'success'
    | 'warning'
    | 'info'
    | 'transparent';
    icon: React.JSX.Element | string;
  onClick?: () => void;
}) {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<div
			className={`badge-${type} badge`}
			onClick={handleClick}
			style={{
				cursor: onClick ? 'pointer' : 'default',
			}}
		>
			{icon ? (
				typeof icon === 'string' ? (
					<Image src={icon} width={16} height={16} alt="icon" />
				) : (
					React.cloneElement(icon, {
						size: 24,
					})
				)
			) : null}
		</div>
	);
}

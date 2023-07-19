import Image from 'next/image';
import './usercard.styles.scss';
import Link from 'next/link';
import React from 'react';
export default function UserCard({
	profilePicture,
	name,
	role,
	email,
	action,
	id,
}: {
  profilePicture: string;
  name: string;
  role: string;
  email?: string;
  action?: React.JSX.Element;
  id: string;
}) {
	return (
		<div className="user-card">
			<Image
				src={
					profilePicture
						? profilePicture
						: '/images/default-profile-picture.jpg'
				}
				alt="Profile Picture"
				width={500}
				height={500}
				className="user-card__profile-picture"
			/>
			<Link href={`/dashboard/user/${id}`}>
				<div className="user-card__name">{name}</div>
			</Link>
			<div className="user-card__email">{email}</div>
			<div className="user-card__role">{role}</div>

			{action ? <div className="user-card__action">{action}</div> : null}
		</div>
	);
}

'use client';
import { getCurrentUserData } from '@utils/user';
import Image from 'next/image';
import { useEffect } from 'react';
import { userPfpUrl } from '@utils/pocket';
import './page.styles.scss';
export default function Page() {
	const user = getCurrentUserData();
	useEffect(() => {
		if (!user) {
			console.log('no user');
		}
		console.log(user);
	}, []);

	return (
		<main id="profile">
			<h1>
				{user?.first_name} {user?.last_name}
			</h1>
			<div className="user-info">
				<div className="user-info__avatar">
					<Image
						src={userPfpUrl + user?.id + '/' + user?.avatar}
						width={100}
						height={100}
						alt="avatar"
					/>  
                    
				</div>
				<div className="user-info__details">
					<div className="user-info__details__item">
						<span className="user-info__details__item__label">Email</span>
						<span className="user-info__details__item__value">{user?.email}</span>
					</div>
					<div className="user-info__details__item">
						<span className="user-info__details__item__label">Verified</span>
						<span className="user-info__details__item__value">{user?.verified ? 'Yes' : 'No'}</span>
					</div>
					<div className="user-info__details__item">
						<span className="user-info__details__item__label">Role</span>
						<span className="user-info__details__item__value">{user?.role}</span>
					</div>
					<div className="user-info__details__item">
						<span className="user-info__details__item__label">Id</span>
						<span className="user-info__details__item__value"
							onClick={() => {
								navigator.clipboard.writeText(user?.id as string);
							}
							}
						>{user?.id}</span>
					</div>
				</div>

			</div>
		</main>
        
	);
}
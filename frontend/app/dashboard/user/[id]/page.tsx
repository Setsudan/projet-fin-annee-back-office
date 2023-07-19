'use client';
import { getUserById } from '@utils/user';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { userPfpUrl } from '@utils/pocket';
import { IUser } from '@interface/user.interface';
import Button from '@components/button/button.component';
import Badge from '@components/badge/badge.component';
import { HiArrowLeft } from 'react-icons/hi2';

export default function Page() {
	const { id } = useParams();
	const [user, setUser] = useState<IUser>();
	const [loading, setLoading] = useState(true);
	const [preview, setPreview] = useState(false);
	useEffect(() => {
		getUserById(id)
			.then((res) => {
				setUser(res as unknown as IUser);
				console.log(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<main id="user">
			<Button
				text="Go Back"
				onClicked={() => window.history.back()}
				type="secondary"
				leftIcon={<Badge
					type="transparent"
					icon={<HiArrowLeft />} />}
			/>
			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<div className="main-profile">
						<Image
							src={`${userPfpUrl}${user?.id}/${user?.avatar}`}
							alt={`Avatar de ${user?.first_name} ${user?.last_name}`}
							width={preview ? 800 : 200}
							height={preview ? 800 : 200}
							className={`profile-image ${preview ? 'preview' : ''}`}
							onClick={() => setPreview(!preview)}
						/>
						<h1 className="profile-name">
              Profil de {user?.first_name} {user?.last_name}
						</h1>
					</div>
					<div className="user-info">
						<span className="info">Username</span>
						<p className="info-content">{user?.username}</p>
					</div>
					<div className="user-info">
						<span className="info">Email</span>
						<p className="info-content">
							{user?.emailVisibility ? 'Visible' : 'Caché'}
						</p>
					</div>
					<div className="user-info">
						<span className="info">Role</span>
						<p className="info-content">{user?.role}</p>
					</div>
					<div className="user-info">
						<span className="info">Créé le</span>
						<p className="info-content">{user?.created}</p>
					</div>
					<div className="user-info">
						<span className="info">Mis à jour le</span>
						<p className="info-content">{user?.updated}</p>
					</div>
				</>
			)}
		</main>
	);
}

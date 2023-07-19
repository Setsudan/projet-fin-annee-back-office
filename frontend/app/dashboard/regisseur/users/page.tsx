'use client';
import { useEffect, useState } from 'react';
import { getAllUsers } from '@utils/regisseur';

import UserCard from '@components/usercard/usercard.component';
import { userPfpUrl } from '@utils/pocket';
import Button from '@components/button/button.component';
import { HiCheck } from 'react-icons/hi2';
import { HiX } from 'react-icons/hi';
import { IUser } from '@interface/user.interface';


export default function Page() {
	const [allUsers, setAllUsers] = useState<IUser[]>([]);
	useEffect(() => {
		getAllUsers().then((res) => {
			setAllUsers(res?.items as unknown as IUser[]);
		});
	}, []);
	return (
		<div className="project">
			<div className={'project_content'}>
				<section className="accounts-to-approve">
					<h2>Accounts to approve</h2>
					{allUsers
						.filter((user) => user.verified === false)
						.map((user) => (
							<UserCard
								key={user.id}
								id={user.id}
								name={`${user.first_name} ${user.last_name}`}
								role={user.role}
								profilePicture={`${userPfpUrl}${user.id}/${user.avatar}`}
								action={
									<>
										<Button
											onClicked={() => {
												console.log('rejecting:' + user.id);
											}}
											type="warning"
											isTransparent
											rightIcon={<HiX />}
										/>
										<Button
											onClicked={() => {
												console.log('approving:' + user.id);
											}}
											type="success"
											isTransparent
											rightIcon={<HiCheck />}
										/>
									</>
								}
							/>
						))}
				</section>
				<section className="all-accounts">
					<h2>All accounts</h2>
					{allUsers
						.filter((user) => user.verified === true)
						.map((user) => (
							<UserCard
								key={user.id}
								name={`${user.first_name} ${user.last_name}`}
								role={user.role}
								profilePicture={`${userPfpUrl}${user.id}/${user.avatar}`}
								id={user.id}
							/>
						))}
				</section>
			</div>
		</div>
	);
}

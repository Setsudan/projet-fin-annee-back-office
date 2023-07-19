'use client';
import Input from '@components/input/input.component';
import Button from '@components/button/button.component';
import Hero from '@components/hero/hero.component';

import { loginFunc } from '@app/_utils/session';
import { useState } from 'react';
export default function LoginPage() {
	const [mail, setMail] = useState('');
	const [password, setPassword] = useState('');
	const handleLogin = () => {
		loginFunc(mail, password).then(
			(res) => {
				if (res?.token) {
					localStorage.setItem('token', res.token);
				}
			},
			(err) => {
				console.log('Error: ' + err);
			}
		).finally(() => {
			window?.location?.replace('/');
		}
		);
	};

	return (
		<>
			<Hero image="https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
				<h1>Login</h1>
				<Input
					type="email"
					label="mail"
					name="mail"
					placeholder="Mail"
					onChange={(e) => setMail(e.target.value)}
				/>
				<Input
					type="password"
					label="password"
					name="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					type="primary"
					text="Login"
					onClicked={() => {
						handleLogin();
					}}
				/>
			</Hero>
		</>
	);
}

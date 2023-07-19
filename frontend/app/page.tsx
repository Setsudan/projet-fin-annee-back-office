'use client';
import '@scss/pages/bridge.scss';
import { isSessionValidFunc } from '@utils/session';
import { getCurrentUserRole } from '@utils/user';
import {useEffect} from 'react';
export default function Home() {
	useEffect(() => {
		autoRedirect();
	}, []);

	const autoRedirect = async () => {
		const isSessionValid = await isSessionValidFunc();
		if (isSessionValid) {
			window?.location?.assign(`/dashboard/${getCurrentUserRole()}`);
		} else {
			window?.location?.assign('/auth/login');
		}
	};

	return (<></>);
	
}

	

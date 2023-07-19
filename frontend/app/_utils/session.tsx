import { pb } from './pocket';

export const loginFunc = async (username: string, password: string) => {
	const authData = await pb
		.collection('users')
		.authWithPassword(username, password);

	if (authData) {
		return authData;
	}
};

export const authStore = pb.authStore;

export const isSessionValidFunc = async (): Promise<boolean> => {
	return pb.authStore.isValid;
};

export const registerFunc = async ({
	email,
	password,
	passwordConfirm,
	first_name,
	last_name,
	role,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
  first_name: string;
  last_name: string;
  role: string;
}) => {
	const username = first_name + '_' + last_name;

	const data = {
		username: username,
		email: email,
		password: password,
		passwordConfirm: passwordConfirm,
		first_name: first_name,
		last_name: last_name,
		role: role,
	};

	const record = await pb.collection('users').create(data);

	if (record) {
		return record;
	}
};

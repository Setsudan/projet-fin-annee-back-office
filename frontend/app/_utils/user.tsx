import { pb } from './pocket';

export const getCurrentUserId = async () => {
	return pb.authStore.model?.id;
};

export const getUserData = async (id: string) => {
	const record = await pb.collection('users').getOne(id);

	if (record) {
		return record;
	}
};

export const getCurrentUserRole = () => {
	return pb.authStore.model?.role;
};

export const getCurrentUserData = () => {
	return pb.authStore.model;
};

export const getUserById = async (id: string) => {
	const record = await pb.collection('users').getOne(id);

	if (record) {
		return record;
	}
};

export const getNamesById = async (id: string) => {
	const record = await pb.collection('users').getOne(id);

	if (record) {
		return record.first_name + ' ' + record.last_name;
	}
};
import { pb } from './pocket';

export const getUnverifiedUsers = async () => {
	const resultList = await pb.collection('users').getList(1, 50, {
		filter: 'verified="false"',
		fields: 'id, first_name, last_name, email, created, role,avatar',
	});

	if (resultList) {
		return resultList;
	}
};

export const getAllUsers = async () => {
	const resultList = await pb.collection('users').getList(1, 50, {
		fields: 'id, first_name, last_name, email, role, avatar,verified',
	});

	if (resultList) {
		return resultList;
	}
};

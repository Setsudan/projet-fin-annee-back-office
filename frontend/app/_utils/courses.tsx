import { pb } from './pocket';

export const getAllCourses = async () => {
	const records = await pb.collection('courses').getFullList({
		sort: '-created',
	});
	if (records) {
		return records;
	}
	return null;
};

export const getCourseById = async (id: string) => {
	const record = await pb.collection('courses').getOne(id);
	if (record) {
		return record;
	}
	return null;
};


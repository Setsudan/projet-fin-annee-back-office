import { pb } from './pocket';
export const getAllProjects = async () => {
	const records = await pb.collection('projects').getFullList({
		sort: '-created',
	});
	if (records) {
		return records;
	}
	return null;
};

export const getProjectById = async (id: string) => {
	const record = await pb.collection('projects').getOne(id);
	if (record) {
		return record;
	}
	return null;
};
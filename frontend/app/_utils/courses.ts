import { pb } from "./pocket";

export const getAllCourses = async () => {
  const resultList = await pb.collection("courses").getList(1, 50);
  if (resultList) {
    return resultList;
  }
};

export const getRelatedClasses = async (classId: string) => {
  const resultList = await pb.collection("classes").getList(1, 50, {
    filter: `id="${classId}"`,
  });
  if (resultList) {
    return resultList;
  }
};

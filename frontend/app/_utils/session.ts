import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const loginFunc = async (username: string, password: string) => {
  const authData = await pb
    .collection("users")
    .authWithPassword(username, password);

  if (authData) {
    return authData;
  }
};

export const logoutFunc = async () => {
  pb.authStore.clear();
};

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
  const username = first_name + "_" + last_name;

  const data = {
    username: username,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
    first_name: first_name,
    last_name: last_name,
    role: role,
  };

  const record = await pb.collection("users").create(data);

  if (record) {
    return record;
  }
};

export const getCurrentUserId = async () => {
  return pb.authStore.model?.id;
};

export const getUserData = async (id: string) => {
  const record = await pb.collection("users").getOne(id);

  if (record) {
    return record;
  }
};


import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

interface UserData {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  first_name: string;
  last_name: string;
  role: string;
}

export const Auth = {
  login: async (username: string, password: string) => {
    const authData = await pb.collection("users").authWithPassword(
      username,
      password
    );

    if (authData) {
      return authData;
    }
  },

  isSessionValid: async (): Promise<boolean> => {
    return pb.authStore.isValid;
  },

  getCurrentUserId: async () => {
    return pb.authStore.model?.id;
  },

  getUserData: async (id: string) => {
    const record = await pb.collection("users").getOne(id);

    if (record) {
      return record;
    }
  },

  getCurrentUserRole: async () => {
    return pb.authStore.model?.role;
  }
};

export const User = {
  register: async (
    email: string,
    password: string,
    passwordConfirm: string,
    firstName: string,
    lastName: string,
    role: string
  ) => {
    const username = firstName + "_" + lastName;

    const data: UserData = {
      username,
      email,
      password,
      passwordConfirm,
      first_name: firstName,
      last_name: lastName,
      role
    };

    const record = await pb.collection("users").create(data);

    if (record) {
      return record;
    }
  }
};

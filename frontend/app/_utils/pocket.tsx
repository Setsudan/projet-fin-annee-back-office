import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');
export const userPfpUrl = 'http://localhost:8090/api/files/_pb_users_auth_/';
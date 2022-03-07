import { endpoints } from "./endpoints";
import { User } from "./types";

const get = async <Response>(url: string) => {
  const response = await fetch(url);
  return response.json() as Promise<Response>;
};

const getUsers = () => get<User[]>(endpoints.users);
const getComments = () => get<Comment[]>(endpoints.comments);

export const api = {
  getUsers,
  getComments,
};

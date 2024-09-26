export interface IAuthForm {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name?: string;
  email: string;
  roles: Role[];
}

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export type TypeUserForm = Omit<IUser, "id"> & { password?: string };

enum Role {
  MEMBER,
  MANAGER,
  OWNER,
  ADMIN,
}

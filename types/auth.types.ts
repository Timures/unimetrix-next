export interface IAuthForm {
  email: string;
  password: string;
  roles: Role[];
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

export interface IRegisterInviteForm {
  name?: string;
  email: string;
  password: string;
  inviteToken: string;
}
export enum Role {
  MEMBER = "MEMBER",
  MANAGER = "MANAGER",
  OWNER = "OWNER",
  ADMIN = "ADMIN",
}

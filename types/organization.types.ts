import { IBase } from "./root.types";

export interface IOrganization extends IBase {
  name: string;
}

export interface IOrganizationResponse {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
}

export type TypeOrganizationFormState = Partial<
  Omit<IOrganizationResponse, "id" | "updatedAt">
>;

import { IBase } from "./root.types";

export interface IOrganization extends IBase {
  name: string;
  slug: string;
}

export interface IOrganizationForm {
  name: string;
  slug: string;
}

export interface IOrganizationResponse {
  name: string;
  slug: string;
}

export type TypeOrganizationFormState = Partial<
  Omit<IOrganizationResponse, "id" | "updatedAt">
>;

export interface IMemberForm {
  email: string;
  role: string;
  organizationId: string;
}

export interface IMember {
  email: string;
  roles: [];
  createdAt: Date;
  expiresAt: Date;
}

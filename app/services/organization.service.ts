import {
  IOrganizationResponse,
  TypeOrganizationFormState,
} from "@/types/organization.types";
import { axiosWithAuth } from "../api/interceptors";

class OrganizationService {
  private BASE_URL = "/user/organizations";

  async getOrganizations() {
    const response = await axiosWithAuth.get<IOrganizationResponse[]>(
      this.BASE_URL
    );
    return response;
  }

  async createOrganization(data: TypeOrganizationFormState) {
    const response = await axiosWithAuth.post(this.BASE_URL, data);
    return response;
  }

  async updateOrganization(id: string, data: TypeOrganizationFormState) {
    const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data);
    return response;
  }

  async deleteOrganization(id: string) {
    const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`);
    return response;
  }
}

export const organizationService = new OrganizationService();

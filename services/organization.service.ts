import {
  IOrganizationResponse,
  TypeOrganizationFormState,
} from "@/types/organization.types";
import { axiosWithAuth } from "../api/interceptors";

class OrganizationService {
  private BASE_USER_ORGANIZATIONS_URL = "/user/organizations";
  private BASE_ORGANIZATION_URL = "/organization";

  async getOrganizations() {
    const response = await axiosWithAuth.get<IOrganizationResponse[]>(
      this.BASE_USER_ORGANIZATIONS_URL
    );
    return response;
  }

  async createOrganization(data: TypeOrganizationFormState) {
    const response = await axiosWithAuth.post(
      this.BASE_USER_ORGANIZATIONS_URL,
      data
    );
    return response;
  }

  async getOrganizationByID(id: string) {
    const response = await axiosWithAuth.get<IOrganizationResponse>(
      `${this.BASE_ORGANIZATION_URL}/${id}`
    );
    return response.data; // Return response data directly
  }

  async getOrganizationBySlug(slug: string) {
    try {
      const response = await axiosWithAuth.get<IOrganizationResponse>(
        `${this.BASE_USER_ORGANIZATIONS_URL}/${slug}`
      );
      return response.data; // Возвращаем данные напрямую
    } catch (error: any) {
      // Обработка ошибок
      throw new Error(
        error.response?.data?.message || "Ошибка при загрузке организации"
      );
    }
  }

  async updateOrganization(id: string, data: TypeOrganizationFormState) {
    const response = await axiosWithAuth.put(
      `${this.BASE_USER_ORGANIZATIONS_URL}/${id}`,
      data
    );
    return response;
  }

  async deleteOrganization(id: string) {
    const response = await axiosWithAuth.delete(
      `${this.BASE_USER_ORGANIZATIONS_URL}/${id}`
    );
    return response;
  }
}

export const organizationService = new OrganizationService();

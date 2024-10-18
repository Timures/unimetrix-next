/** base/invite
 * POST
 * {
    "email": "test11_org@test.ru",
    "roles": ["MEMBER"],
    "organizationId":"cm1i829dy00027i9gncgu5yt3"
}
 */
import type { IMemberForm } from "@/types/member.types";
import { axiosWithAuth } from "../api/interceptors";

class MemberService {
  private BASE_INVITE_URL = "/invite";

  async inviteMember(data: IMemberForm) {
    const response = await axiosWithAuth.post(`${this.BASE_INVITE_URL}`, data);
    return response;
  }

  async getMembers(organizationId: string) {
    try {
      const response = await axiosWithAuth.get(
        `${this.BASE_INVITE_URL}/${organizationId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching members:", error);
      throw error;
    }
  }
}

export const memberService = new MemberService();

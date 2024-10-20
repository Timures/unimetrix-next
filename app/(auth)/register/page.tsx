import { Metadata } from "next";
import Invite from "./_components/Invite";

export const metadata: Metadata = {
  title: "Invite",
};

export default function RegisterInvitePage() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <Invite />
    </div>
  );
}

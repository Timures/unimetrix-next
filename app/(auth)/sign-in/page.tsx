import { Metadata } from "next";
import Login from "./_components/Login";

export const metadata: Metadata = {
  title: "SignIn",
};

export default function SignInPage() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <Login />
    </div>
  );
}

import { Metadata } from "next";
import Register from "./_components/Register";

export const metadata: Metadata = {
  title: "SignUp",
};

export default function SignUpPage() {
  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <Register />
    </div>
  );
}

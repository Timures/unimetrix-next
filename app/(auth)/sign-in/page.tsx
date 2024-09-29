import { Metadata } from "next";
import Login from "./_components/Login";

export const metadata: Metadata = {
  title: "SignIn",
};

export default function SignInPage() {
  return <Login />;
}

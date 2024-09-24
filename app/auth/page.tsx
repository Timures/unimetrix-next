import { Metadata } from "next";
import { Auth } from "./_components/Auth";

export const metadata: Metadata = {
    title: 'Sign-in'
}

export default function SignInPage() {
    return <Auth />
}
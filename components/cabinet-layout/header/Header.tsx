import { LogoutButton } from "../sidebar/LogoutButton";
import { GlobalLoader } from "./GlobalHeader";
import { Profile } from "./profile/Profile";

export function Header() {
  return (
    <header className="flex justify-end">
      <GlobalLoader />
      <Profile />
      <LogoutButton />
    </header>
  );
}

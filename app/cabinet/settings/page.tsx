import { Metadata } from "next";
import { Settings } from "./Settings";

export const metadata: Metadata = {
  title: "Settings",
};
export default function SettingsPage() {
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Settings
      </h2>
      <Settings />
    </div>
  );
}

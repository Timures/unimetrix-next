import { Metadata } from "next";
import { Organizations } from "./Organizations";

export const metadata: Metadata = {
  title: "Organization",
};
export default function OrganizationsPage() {
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Organizations
      </h2>
      <Organization />
    </div>
  );
}

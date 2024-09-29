import { Organizations } from "../organizations/Organizations";

export default function DashboardPage() {
  return (
    <main>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Dashboard
      </h2>
      <Organizations />
    </main>
  );
}

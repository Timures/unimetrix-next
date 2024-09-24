import { Organizations } from "./Organizations";

const dashboardPage = () => {
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Dashboard
      </h2>
      <div>
        <Organizations />
      </div>
    </div>
  );
};

export default dashboardPage;

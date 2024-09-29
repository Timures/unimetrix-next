import { Footer } from "../(marketing)/_components/footer";
import { MarketingHeader } from "../(marketing)/_components/MarketingHeader";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MarketingHeader />
      <main className="-mt-16 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AuthLayout;

import { Footer } from "../(marketing)/_components/footer";
import { Navbar } from "../(marketing)/_components/navbar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default AuthLayout;

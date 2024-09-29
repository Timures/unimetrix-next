import { MarketingHeader } from "./_components/MarketingHeader";
import { Footer } from "./_components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <MarketingHeader />
      <main className="-mt-16 h-full flex items-center">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;

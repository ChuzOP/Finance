import { SideNav } from "../components/organisms";
import { Header } from "../components/organisms";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-[280px]">
        <SideNav />
      </div>
      <div className="flex-grow px-6 pt-[68px] md:overflow-y-auto bg-backgrounds-gray pb-6">
        {children}
      </div>
    </div>
  );
}

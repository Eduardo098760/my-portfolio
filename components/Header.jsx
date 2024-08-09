import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white  bg-gradient-to-b to-gray-800 from-gray-950 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Eduardo S <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav*/}
        <div className="hidden xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden items-center gap-8">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;

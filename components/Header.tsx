import Link from "next/link";

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-22.5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link prefetch href="/">
            <span className="text-2xl font-semibold tracking-wide">
              Mohamed<span className="text-accent"> El-Ghazoui</span>
            </span>
          </Link>

          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;

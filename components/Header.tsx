import Link from "next/link";

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-16 xl:px-0 xl:h-22.5">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-x-3 py-4 xl:py-8">
          <Link prefetch href="/">
            <span className="text-base sm:text-2xl font-semibold tracking-wide">
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

import Link from "next/link";

import Socials from "@/components/Socials";
import { profile } from "@/lib/data";

const Header = () => {
  return (
    <header className="relative xl:absolute z-30 w-full items-center px-4 sm:px-16 xl:px-0 xl:h-22.5">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-x-3 py-4 xl:py-8">
          <Link prefetch href="/">
            <span className="text-base sm:text-2xl font-semibold tracking-wide">
              Mohamed<span className="text-accent"> El-Ghazoui</span>
            </span>
          </Link>

          <div className="flex items-center gap-x-3 sm:gap-x-5">
            <a
              href={profile.cv}
              download
              className="rounded-full border border-accent px-3 py-1 text-xs sm:px-5 sm:py-1.5 sm:text-sm tracking-wide hover:bg-accent transition-all duration-300 whitespace-nowrap"
            >
              Mon CV
            </a>
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

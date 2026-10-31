import Link from "next/link";
import type { IconType } from "react-icons";
import {
  RiGithubLine,
  RiGlobalLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri";

import { profile } from "@/lib/data";

export const socialData: { name: string; link: string; Icon: IconType }[] = [
  { name: "LinkedIn", link: profile.linkedin, Icon: RiLinkedinBoxLine },
  { name: "Email", link: `mailto:${profile.email}`, Icon: RiMailLine },
  { name: "Portfolio", link: profile.website, Icon: RiGlobalLine },
  { name: "Github", link: profile.github, Icon: RiGithubLine },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-1.25 hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

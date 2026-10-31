import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";

const robots = (): MetadataRoute.Robots => {
  const origin = siteUrl();
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(origin && { sitemap: `${origin}/sitemap.xml` }),
  };
};

export default robots;

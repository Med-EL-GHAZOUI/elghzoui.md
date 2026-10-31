import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";

const sitemap = (): MetadataRoute.Sitemap => {
  const origin = siteUrl();
  // Without a confirmed production domain there is no valid absolute URL to list.
  if (!origin) return [];
  return [{ url: origin, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
};

export default sitemap;

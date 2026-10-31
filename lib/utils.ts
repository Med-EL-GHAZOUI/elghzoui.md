export const cn = (...parts: Array<string | false | null | undefined>): string =>
  parts.filter(Boolean).join(" ");

export const siteUrl = (): string | undefined => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return raw ? raw.replace(/\/$/, "") : undefined;
};

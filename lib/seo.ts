import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import type { SeoMeta } from "@/lib/types";

function buildAbsoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function createMetadata(meta: SeoMeta): Metadata {
  const url = buildAbsoluteUrl(meta.path);
  const image = meta.image ? buildAbsoluteUrl(meta.image) : buildAbsoluteUrl("/marketing/hero-bg.png");

  return {
    title: `${meta.title} | ${SITE_NAME}`,
    description: meta.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: `${meta.title} | ${SITE_NAME}`,
      description: meta.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | ${SITE_NAME}`,
      description: meta.description,
      images: [image],
    },
  };
}

export function createDefaultMetadata(): Metadata {
  return createMetadata({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: "/",
  });
}

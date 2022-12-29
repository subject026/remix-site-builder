import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { findPageBySlug, Page } from "../models/page.server";
import PageTemplate from "../templates/PageTemplate";

import type { LoaderArgs } from "@remix-run/node";

type TLoaderData = {
  page: {
    slug: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
};

export async function loader({ params }: LoaderArgs) {
  const { pageSlug } = params;
  if (!pageSlug) return redirect("/404.tsx");

  const page = await findPageBySlug(pageSlug);
  if (!page) return redirect("/page-not-found");

  return json({ page });
}

// export type PageData = Awaited<ReturnType<TLoaderData>>;

export default function PageSlug() {
  const {
    page: { slug, title, content, createdAt, updatedAt },
  } = useLoaderData<TLoaderData>();

  return <PageTemplate page={{ slug, title, content, createdAt, updatedAt }} />;
}

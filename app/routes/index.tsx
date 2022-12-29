import type { Page } from "@prisma/client";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PageTemplate from "../templates/PageTemplate";

// import type { PageData } from "./$pageSlug";
import { getSiteMeta, initSiteMeta } from "../models/siteMeta.server";
import { findPageBySlug } from "../models/page.server";
import Header from "../components/Header";
import Hero from "../modules/blocks/Hero";

export async function loader({ params }: LoaderArgs) {
  const siteMeta = await getSiteMeta();

  // if (!siteMeta) {
  //   initSiteMeta();
  //   return null;
  // }

  if (siteMeta?.indexSlug) {
    // get index page data
    const page = await findPageBySlug(siteMeta.indexSlug);
    return json({ page });
  }

  return null;
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  if (data)
    return (
      <>
        <Header />
        <main className="bg-pink-300">
          {/* <h1>{data.title}</h1>
          <pre>{JSON.stringify(page, null, 2)}</pre> */}
        </main>
      </>
    );

  // if (data && data.page) {
  //   return <PageTemplate page={data} />;
  // }

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

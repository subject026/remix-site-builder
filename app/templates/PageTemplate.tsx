import Header from "../components/Header";

import type { Page } from "@prisma/client";
// import type { PageData } from "../routes/$pageSlug";

interface IPageData {
  slug: String;
  title: String;
  content: String;
  createdAt: String;
  updatedAt: String;
}

interface IProps {
  page: IPageData;
}
export default function PageTemplate({ page }: IProps) {
  return (
    <>
      <Header />
      <main>
        <h1>{page.title}</h1>
        <pre>{JSON.stringify(page, null, 2)}</pre>
      </main>
    </>
  );
}

import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { findPages } from "../../../models/page.server";

export async function loader({ params }: LoaderArgs) {
  const pages = await findPages();

  return json({ pages });
}

export default function AdminPagesIndex() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Pages Index</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

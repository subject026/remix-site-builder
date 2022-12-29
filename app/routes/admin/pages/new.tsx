import type { ActionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createPage } from "../../../models/page.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const slug = formData.get("slug");
  const title = formData.get("title");
  const content = formData.get("content");

  if (typeof title !== "string" || title.length === 0) {
    return json(
      { errors: { slug: null, title: "Title is required", content: null } },
      { status: 400 }
    );
  }

  if (typeof content !== "string" || content.length === 0) {
    return json(
      { errors: { slug: null, title: null, content: "Content is required" } },
      { status: 400 }
    );
  }

  if (typeof slug !== "string" || slug.length === 0) {
    return json(
      { errors: { slug: "Slug is required", title: null, content: null } },
      { status: 400 }
    );
  }

  const page = await createPage(slug, title, content);

  return redirect(`/admin/pages/${page.id}`);
}

export default function NewNotePage() {
  const actionData = useActionData<typeof action>();
  const slugRef = React.useRef<HTMLInputElement>(null);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const contentRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.content) {
      contentRef.current?.focus();
    } else if (actionData?.errors?.slug) {
      slugRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Slug: </span>
          <input
            ref={slugRef}
            name="slug"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.slug ? true : undefined}
            aria-errormessage={
              actionData?.errors?.slug ? "slug-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.slug && (
          <div className="pt-1 text-red-700" id="slug-error">
            {actionData.errors.slug}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Title: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.title ? true : undefined}
            aria-errormessage={
              actionData?.errors?.title ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.title && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.title}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Content: </span>
          <textarea
            ref={contentRef}
            name="content"
            rows={8}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
            aria-invalid={actionData?.errors?.content ? true : undefined}
            aria-errormessage={
              actionData?.errors?.content ? "content-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.content && (
          <div className="pt-1 text-red-700" id="content-error">
            {actionData.errors.content}
          </div>
        )}
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}

import type { Page } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Page } from "@prisma/client";

export async function createPage(
  slug: Page["slug"],
  title: Page["title"],
  content: Page["content"]
) {
  return prisma.page.create({
    data: {
      slug,
      title,
      content,
    },
  });
}

export async function findPageById(id: Page["id"]) {
  return prisma.page.findUnique({ where: { id } });
}

export async function findPageBySlug(slug: Page["slug"]) {
  return prisma.page.findUnique({ where: { slug } });
}

export async function findPages() {
  return prisma.page.findMany();
}

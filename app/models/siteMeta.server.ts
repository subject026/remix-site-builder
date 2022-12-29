import { prisma } from "~/db.server";

export type { SiteMeta } from "@prisma/client";

export async function initSiteMeta() {
  return prisma.siteMeta.create({ data: {} });
}

export async function getSiteMeta() {
  return prisma.siteMeta.findFirst();
}

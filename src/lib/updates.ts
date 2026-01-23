import { allUpdates } from "content-collections";
import type { Update } from "content-collections";
export type { Update };
/*
export function getAllUpdates(): Update[] {
  return allUpdates
    .sort(
      (a: Update, b: Update) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}
*/
export function getAllUpdates(limit: number = 0): Update[] {
    const tempU = allUpdates
        .sort(
        (a: Update, b: Update) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        if (limit == 0) {
            return tempU
        }
        else {
            return tempU.slice(0, limit)
        }
    return tempU;
}



export function getUpdateBySlug(slug: string): Update | undefined {
  return allUpdates.find((update: Update) => update._meta.path === slug);
}
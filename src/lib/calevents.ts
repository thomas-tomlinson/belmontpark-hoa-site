import { allCalevents } from "content-collections";
import type { Calevent } from "content-collections";
export type { Calevent };

export function getAllCalevents(): Calevent[] {
  return allCalevents
    .sort(
      (a: Calevent, b: Calevent) =>
        new Date(b.year).getTime() - new Date(a.year).getTime()
    );
}

export function getUpdateBySlug(slug: string): Calevent | undefined {
  return allCalevents.find((update: Calevent) => update._meta.path === slug);
}
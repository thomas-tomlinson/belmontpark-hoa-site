import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";

const updates = defineCollection({
  name: "updates",
  directory: "src/updates",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document);
    return {
      ...document,
      html,
    };
  },
});

const calevents = defineCollection({
    name: "calevents",
    directory: "src/calevents",
    include: "**/*.md",
    schema: z.object({
        year: z.string(),
    }),
    transform: async (document, context) => {
        const html = await compileMarkdown(context, document);
        return {
            ...document,
            html,
        };
    },
});

export default defineConfig({
  collections: [updates, calevents],
});
import {z, defineCollection} from 'astro:content'

const date = z
  .string()
  .transform((s: string) => new Date(s.includes('T') ? s : `${s}T16:00:00Z`))

const posts = defineCollection({
  schema: ({image}) =>
    z.object({
      author: z.string().default('Amy'),
      created: date.optional(),
      draft: z.boolean().default(false),
      image: image().optional(),
      tags: z.array(z.string()).default([]),
      title: z.string().optional(),
      updated: date.optional(),
    }),
})

export const collections = {
  posts,
}

import {z} from 'zod';

const SearchResultSchema = z.object({
  total: z.number(),
  total_pages: z.number(),
})

const ImageSchema = z.object({
  id: z.string(),
  // created_at: z.string(),
  // width: z.number(),
  // height: z.number(),
  // color: z.string(),
  // blur_hash: z.string(),
  likes: z.number(),
  description: z.union([z.string(), z.null()]),
  user: z.object({
    username: z.string(),
    name: z.string(),
    links: z.object({
      html: z.string()
    })
  }),
  urls: z.object({
    // regular: z.string(),
    small: z.string()
  }),
  links: z.object({
    html: z.string()
  })
})

export const SearchResultWithImagesSchema = SearchResultSchema.extend({
  results: z.array(ImageSchema)
})

export type Photo = z.infer<typeof ImageSchema>
export type SearchResultWithImages = z.infer<typeof SearchResultWithImagesSchema>

import { defineCollection } from '@nuxt/content'
import { z } from 'zod'

const commonContentSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
})

const commonArticleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  image: z.string(),
  readingTime: z.string(),
  tags: z.array(z.string()),
})

const commonProjectSchema = z.object({
  name: z.string(),
  image: z.string(),
  link: z.string(),
  release: z.string(),
  date: z.string().optional(),
  featured: z.boolean().optional(),
})

const commonFaqSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  faqQuestions: z.array(
    z.object({
      title: z.string(),
      questions: z.array(
        z.object({
          label: z.string(),
          content: z.string(),
        }),
      ),
    }),
  ),
})

export const collections = {
  content_en: defineCollection({
    type: 'page',
    source: {
      include: 'en/**/*.md',
      exclude: ['en/articles/*.md'],
      prefix: '/en',
    },
    schema: commonContentSchema,
  }),
  content_id: defineCollection({
    type: 'page',
    source: {
      include: 'id/**/*.md',
      exclude: ['id/articles/*.md'],
      prefix: '/id',
    },
    schema: commonContentSchema,
  }),
  articles_en: defineCollection({
    type: 'page',
    source: {
      include: 'en/articles/*.md',
      prefix: '/en/articles',
    },
    schema: commonArticleSchema,
  }),
  articles_id: defineCollection({
    type: 'page',
    source: {
      include: 'id/articles/*.md',
      prefix: '/id/articles',
    },
    schema: commonArticleSchema,
  }),
  projects_en: defineCollection({
    type: 'data',
    source: 'en/projects/*.json',
    schema: commonProjectSchema,
  }),
  projects_id: defineCollection({
    type: 'data',
    source: 'id/projects/*.json',
    schema: commonProjectSchema,
  }),
  stack: defineCollection({
    type: 'data',
    source: 'stack.json',
    schema: z.object({
      items: z.array(
        z.object({
          name: z.string(),
          link: z.string(),
          icon: z.string(),
        }),
      ),
    }),
  }),
  faq_en: defineCollection({
    type: 'data',
    source: 'en/faq.json',
    schema: commonFaqSchema,
  }),
  faq_id: defineCollection({
    type: 'data',
    source: 'id/faq.json',
    schema: commonFaqSchema,
  }),
}

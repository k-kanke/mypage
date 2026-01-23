import { defineCollection, z } from 'astro:content';

const timeline = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		from: z.coerce.string(),
		to: z.coerce.string().optional(),
	}),
});

export const collections = { timeline };

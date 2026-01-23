import { defineCollection, z } from 'astro:content';

const timeline = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		from: z.coerce.string(),
		to: z.coerce.string().optional(),
	}),
});

const profile = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		role: z.string(),
		links: z
			.array(
				z.object({
					label: z.string(),
					url: z.string().url(),
					icon: z.enum(['github', 'x', 'web']),
				}),
			)
			.default([]),
	}),
});

export const collections = { timeline, profile };

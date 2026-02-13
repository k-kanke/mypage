import { defineCollection, z } from 'astro:content';

const timeline = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		from: z.coerce.string(),
		to: z.coerce.string().optional(),
		tags: z.array(z.string()).optional(),
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

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		period: z.coerce.string().optional(),
		image: z.string().optional(),
		images: z.array(z.string()).optional(),
		imageAlt: z.string().optional(),
		summary: z.string().optional(),
		link: z.string().url().optional(),
		linkLabel: z.string().optional(),
		repoUrl: z.string().url().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const articles = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		publishedAt: z.coerce.date(),
		url: z.string().url(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { timeline, profile, projects, articles };

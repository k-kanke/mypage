import { defineCollection, z } from 'astro:content';

const timelineSchema = z.object({
	lang: z.enum(['ja', 'en']).default('ja'),
	title: z.string(),
	from: z.coerce.string(),
	to: z.coerce.string().optional(),
	tags: z.array(z.string()).optional(),
});

const profileSchema = z.object({
	lang: z.enum(['ja', 'en']).default('ja'),
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
});

const projectsSchema = z.object({
	lang: z.enum(['ja', 'en']).default('ja'),
	title: z.string(),
	period: z.coerce.string().optional(),
	image: z.string().optional(),
	images: z.array(z.string()).optional(),
	imageAlt: z.string().optional(),
	summary: z.string().optional(),
	link: z.string().url().optional(),
	linkLabel: z.string().optional(),
	repoUrl: z.string().url().optional(),
	projectTag: z.string().optional(),
	tags: z
		.union([z.array(z.string()), z.string()])
		.optional()
		.transform((value) => {
			if (!value) return undefined;
			if (Array.isArray(value)) return value;
			return value
				.split(',')
				.map((tag) => tag.trim())
				.filter(Boolean);
		}),
});

const articlesSchema = z.object({
	lang: z.enum(['ja', 'en']).default('ja'),
	title: z.string(),
	publishedAt: z.coerce.date(),
	url: z.string().url(),
	draft: z.boolean().default(false),
	tags: z.array(z.string()).optional(),
});

const timeline = defineCollection({ type: 'content', schema: timelineSchema });
const timeline_en = defineCollection({ type: 'content', schema: timelineSchema });

const profile = defineCollection({ type: 'content', schema: profileSchema });
const profile_en = defineCollection({ type: 'content', schema: profileSchema });

const projects = defineCollection({ type: 'content', schema: projectsSchema });
const projects_en = defineCollection({ type: 'content', schema: projectsSchema });

const articles = defineCollection({ type: 'content', schema: articlesSchema });
const articles_en = defineCollection({ type: 'content', schema: articlesSchema });

export const collections = {
	timeline,
	timeline_en,
	profile,
	profile_en,
	projects,
	projects_en,
	articles,
	articles_en,
};

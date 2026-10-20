import type { Locale } from './config';

export type Messages = {
	meta: {
		title: string;
		description: string;
	};
	layout: {
		languageSwitcherLabel: string;
		languageName: Record<Locale, string>;
	};
	hero: {
		eyebrow: string;
		linksAriaLabel: string;
	};
	timeline: {
		title: string;
	};
	articles: {
		title: string;
		empty: string;
	};
};

export const messages: Record<Locale, Messages> = {
	ja: {
		meta: {
			title: 'k-kanke | Portfolio',
			description: 'k-kankeのプロフィール、制作物、経歴、技術記事。',
		},
		layout: {
			languageSwitcherLabel: '言語切り替え',
			languageName: {
				ja: '日本語',
				en: 'English',
			},
		},
		hero: {
			eyebrow: 'Portfolio / Engineering',
			linksAriaLabel: 'リンク',
		},
		timeline: {
			title: 'Experience',
		},
		articles: {
			title: 'Articles',
			empty: '`src/content/articles` に記事を追加するとここに表示されます。',
		},
	},
	en: {
		meta: {
			title: 'k-kanke | Portfolio',
			description: 'Profile, projects, experience and writing by k-kanke.',
		},
		layout: {
			languageSwitcherLabel: 'Language switcher',
			languageName: {
				ja: 'Japanese',
				en: 'English',
			},
		},
		hero: {
			eyebrow: 'Portfolio / Engineering',
			linksAriaLabel: 'Links',
		},
		timeline: {
			title: 'Experience',
		},
		articles: {
			title: 'Articles',
			empty: 'Articles will appear here when you add markdown files to `src/content/articles`.',
		},
	},
};

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
	projects: {
		title: string;
		openProjectAriaLabel: (title: string) => string;
		repoAriaLabel: string;
		closeAriaLabel: string;
		galleryAriaLabel: string;
	};
	articles: {
		title: string;
		empty: string;
	};
};

export const messages: Record<Locale, Messages> = {
	ja: {
		meta: {
			title: '自己紹介 | デモ',
			description: 'シンプルな自己紹介サイトのデモ',
		},
		layout: {
			languageSwitcherLabel: '言語切り替え',
			languageName: {
				ja: '日本語',
				en: 'English',
			},
		},
		hero: {
			eyebrow: 'Self Introduction',
			linksAriaLabel: 'リンク',
		},
		timeline: {
			title: 'Timeline',
		},
		projects: {
			title: 'Projects',
			openProjectAriaLabel: (title) => `${title} を開く`,
			repoAriaLabel: 'GitHub リポジトリ',
			closeAriaLabel: '閉じる',
			galleryAriaLabel: 'プロジェクト画像',
		},
		articles: {
			title: 'Articles',
			empty: '`src/content/articles` に記事を追加するとここに表示されます。',
		},
	},
	en: {
		meta: {
			title: 'Profile | Demo',
			description: 'A simple self-introduction website demo',
		},
		layout: {
			languageSwitcherLabel: 'Language switcher',
			languageName: {
				ja: 'Japanese',
				en: 'English',
			},
		},
		hero: {
			eyebrow: 'Self Introduction',
			linksAriaLabel: 'Links',
		},
		timeline: {
			title: 'Timeline',
		},
		projects: {
			title: 'Projects',
			openProjectAriaLabel: (title) => `Open ${title}`,
			repoAriaLabel: 'GitHub repository',
			closeAriaLabel: 'Close',
			galleryAriaLabel: 'Project images',
		},
		articles: {
			title: 'Articles',
			empty: 'Articles will appear here when you add markdown files to `src/content/articles`.',
		},
	},
};

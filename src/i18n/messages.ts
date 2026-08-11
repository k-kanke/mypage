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
	techMap: {
		title: string;
		description: string;
		xAxisLabel: string;
		yAxisLabel: string;
		recency: {
			active: string;
			recent: string;
			past: string;
		};
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
		techMap: {
			title: 'Tech Position Map',
			description: '実務と個人開発の履歴ベースで、経験年数と直近利用を可視化しています。',
			xAxisLabel: '経験年数 (年)',
			yAxisLabel: '直近利用',
			recency: {
				active: '現在',
				recent: '最近',
				past: '過去',
			},
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
		techMap: {
			title: 'Tech Position Map',
			description: 'A history-based map using years of experience and recency of use.',
			xAxisLabel: 'Years of Experience',
			yAxisLabel: 'Recency',
			recency: {
				active: 'Active',
				recent: 'Recent',
				past: 'Past',
			},
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

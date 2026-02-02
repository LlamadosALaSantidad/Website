import type { ParsedMarkdown } from "../lib/markdown";

export interface SaintMetadata {
	id: string;
	slug: string;
	name: string;
	feastDay: string;

	location: {
		city: string;
		country: string;
	};

	category: string;
	tags: string[];

	description: string;
	coverImage: string;
	portraitImage?: string;

	audio?: {
		exists: boolean;
		src: string;
	};

	audioMiracles?: {
		exists: boolean;
		src: string;
	};

	audioTestimonies?: {
		exists: boolean;
		src: string;
	};

	related?: {
		miraclesPage?: boolean;
		testimoniesPage?: boolean;
	};

	seo: {
		title: string;
		description: string;
	};
}

export interface SaintContent {
	meta: SaintMetadata;
	markdown: ParsedMarkdown;
}

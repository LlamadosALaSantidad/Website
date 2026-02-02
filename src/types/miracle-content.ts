import type { ParsedMarkdown } from "../lib/markdown";

export interface MiracleMetadata {
    id: string;
    slug: string;
    name: string;
    day: string;

    location: {
        city: string;
        country: string;
    };

    region: string;

    description: string;
    coverImage: string;
    portraitImage?: string;

    audio?: {
        exists: boolean;
        src: string;
    };

    seo: {
        title: string;
        description: string;
    };
}

export interface MiracleContent {
    meta: MiracleMetadata;
    markdown: ParsedMarkdown;
}

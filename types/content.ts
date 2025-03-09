export interface ContentMeta {
	title: string;
	description: string;
	date: string;
	slug: string;
	category: string;
	tags?: string[];
	author?: string;
}

export interface ContentItem {
	meta: ContentMeta;
	content: string;
}

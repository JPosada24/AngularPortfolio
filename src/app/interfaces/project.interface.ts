export interface Project {
	title: string;
	description: string;
	image: string;
	repoUrl: string;
	demoUrl?: string;
	tags: string[];
	featured?: boolean;
}

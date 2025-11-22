export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    demoUrl?: string;
    githubUrl?: string;
    featured: boolean
}

export interface Metadata {
    title: string;
    description: string;
    keyworkds?: string[];
    author?: string;
    ogIamge?: string;    
}
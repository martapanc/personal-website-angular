export interface Project {
    title: string;
    id: string;
    year: number;
    photo: string;
    repo?: string;
    site?: string;
    article?: string;
    report?: string;
    video?: string;
    tags: string[];
    text: string;
}

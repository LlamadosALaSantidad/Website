export default interface Saint {
    id: string;
    slug: string;
    image: string;
    name: string;
    categories: string[];
    tags: string[];
    date: string | null;
    location: string;
    description: string;
    publishedAt: string;
}
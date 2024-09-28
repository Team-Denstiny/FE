export interface Post {
    id: number;
    postId: number;
    author: string;
    category: string;
    date: string;
    title: string;
    content: string;
    tags:string[];
    images: string[];
    likes: number;
    comments: number;
    views: number;
};

export interface dataProp {
    posts ?: Post[],
    nextHandler ?: () => void; 
};
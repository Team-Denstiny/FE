export interface Post {
    id: number;
    author: string;
    date: string;
    title: string;
    content: string;
    images: string[];
    likes: number;
    comments: number;
    views: number;
    tag?: string;
  }
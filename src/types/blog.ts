export interface Blog {
  _id: string;

  title: string;
  slug: string;
  excerpt: string;
  content: string;

  coverImage: string;

  category: string;

  tags: string[];

  featured: boolean;
  published: boolean;

  author: string;

  seoTitle: string;
  seoDescription: string;

  readTime: string;

  createdAt: string;
  updatedAt: string;
}
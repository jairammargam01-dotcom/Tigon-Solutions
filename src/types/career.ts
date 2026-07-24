export interface Career {
  _id: string;

  title: string;
  slug: string;

  department: string;
  employmentType: string;
  location: string;

  shortDescription: string;

  applyUrl: string;

  displayOrder: number;

  featured: boolean;
  published: boolean;

  seoTitle: string;
  seoDescription: string;

  createdAt: string;
  updatedAt: string;
}
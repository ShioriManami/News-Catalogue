export interface News {
  id: number;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  date: Date;
  readTime: number;
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
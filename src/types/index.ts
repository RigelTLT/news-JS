export type articlesData = {
  source: {
      id: string;
      name: string;
  };
  author: string;
  title: string;
  url: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export interface INewItems{
  author: string | null;
  content: string;
  description: string;
  publishedAt: string;
  source: {
      id: string;
      name: string;
      description: string;
      language: string;
      country: string;
  };
  title: string;
  url: string;
  urlToImage: string;
  status: string;
  totalResults: number;
  articles: articlesData[];
}
export type sourceData = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
export interface ISourceItems{
  status: string;
  sources: sourceData[];
}
export interface IOptions {
  [key: string]: string;
}
export type Callback <T> = (param: T) => void;
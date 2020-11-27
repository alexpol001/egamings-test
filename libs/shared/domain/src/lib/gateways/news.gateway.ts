import {
  NewsCreateArgs,
  NewsUpdateArgs,
  NewsWhereUniqueArgs,
} from '../args/news.args';

import { News } from '../models/news.model';

export interface NewsGateway {
  findAllNews(): Promise<News[]>;

  createNews(args: NewsCreateArgs): Promise<News>;

  updateNews(args: NewsUpdateArgs): Promise<News>;

  deleteNews(args: NewsWhereUniqueArgs): Promise<News>;
}

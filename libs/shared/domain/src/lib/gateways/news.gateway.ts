import {
  INewsCreateInput,
  INewsUpdateArgs,
  INewsWhereUniqueInput,
} from '../args/news.args';

import { INews } from '../models/news.model';

export interface INewsGateway {
  findAllNews(): Promise<INews[]>;

  createNews(data: INewsCreateInput): Promise<INews>;

  updateNews(args: INewsUpdateArgs): Promise<INews>;

  deleteNews(where: INewsWhereUniqueInput): Promise<INews>;
}

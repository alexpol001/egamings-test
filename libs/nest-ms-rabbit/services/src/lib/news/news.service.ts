import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  INews,
  INewsCreateInput,
  INewsGateway,
  INewsUpdateArgs,
  INewsWhereUniqueInput,
  // NewsCreateArgs,
  // NewsUpdateArgs,
  // NewsWhereUniqueArgs,
} from '@egamings/shared/domain';

import { News } from '@egamings/shared/nest/db-postgres';

@Injectable()
export class NewsService implements INewsGateway {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>
  ) {}

  findAllNews(): Promise<INews[]> {
    return this.newsRepository.find();
  }
  createNews(data: INewsCreateInput): Promise<INews> {
    return this.newsRepository.save(this.newsRepository.create(data));
  }

  async updateNews(args: INewsUpdateArgs): Promise<INews> {
    const id = args.where.id;

    await this.newsRepository.update(id, args.data);
    return this.newsRepository.findOne(id);
  }

  async deleteNews(where: INewsWhereUniqueInput): Promise<INews> {
    const id = where.id;

    const news = await this.newsRepository.findOneOrFail(id);

    await this.newsRepository.delete(id);

    return news;
  }
}

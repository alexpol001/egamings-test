import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  NewsCreateArgs,
  NewsUpdateArgs,
  NewsWhereUniqueArgs,
} from '@egamings/shared/domain';

import { News } from '@egamings/shared/nest/db-postgres';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>
  ) {}

  async findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  async create(newsCreateInputDto: NewsCreateArgs) {
    return this.newsRepository.save(
      this.newsRepository.create(newsCreateInputDto)
    );
  }

  async update(newsUpdateInputDto: NewsUpdateArgs): Promise<News> {
    const id = newsUpdateInputDto.where.id;

    await this.newsRepository.update(id, newsUpdateInputDto.data);
    return this.newsRepository.findOne(id);
  }

  async delete(
    newsWhereUniqueInputDto: NewsWhereUniqueArgs
  ): Promise<News> {
    const news = await this.newsRepository.findOneOrFail(
      newsWhereUniqueInputDto.id
    );
    await this.newsRepository.delete(newsWhereUniqueInputDto.id);
    return news;
  }
}

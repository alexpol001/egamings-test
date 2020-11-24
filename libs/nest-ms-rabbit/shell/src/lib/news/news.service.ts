import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { News } from '@egamings/shared/nest/domain';

import {
  NewsCreateInputDto,
  NewsUpdateInputDto,
  NewsWhereUniqueInputDto,
} from './news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>
  ) {}

  async findAll(): Promise<News[]> {
    return this.newsRepository.find();
  }

  async create(newsCreateInputDto: NewsCreateInputDto) {
    return this.newsRepository.save(
      this.newsRepository.create(newsCreateInputDto)
    );
  }

  async update(newsUpdateInputDto: NewsUpdateInputDto): Promise<News> {
    const id = newsUpdateInputDto.where.id;

    await this.newsRepository.update(id, newsUpdateInputDto.data);
    return this.newsRepository.findOne(id);
  }

  async delete(
    newsWhereUniqueInputDto: NewsWhereUniqueInputDto
  ): Promise<News> {
    const news = await this.newsRepository.findOneOrFail(
      newsWhereUniqueInputDto.id
    );
    await this.newsRepository.delete(newsWhereUniqueInputDto.id);
    return news;
  }
}

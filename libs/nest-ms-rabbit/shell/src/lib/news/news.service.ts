import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NewsEntity } from '@egamings/shared/nest/domain';

import {
  NewsCreateInputDto,
  NewsUpdateInputDto,
  NewsWhereUniqueInputDto,
} from './news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>
  ) {}

  async findAll(): Promise<NewsEntity[]> {
    return this.newsRepository.find();
  }

  async create(newsCreateInputDto: NewsCreateInputDto) {
    return this.newsRepository.save(
      this.newsRepository.create(newsCreateInputDto)
    );
  }

  async update(newsUpdateInputDto: NewsUpdateInputDto): Promise<NewsEntity> {
    const id = newsUpdateInputDto.where.id;

    await this.newsRepository.update(id, newsUpdateInputDto.data);
    return this.newsRepository.findOne(id);
  }

  async delete(
    newsWhereUniqueInputDto: NewsWhereUniqueInputDto
  ): Promise<NewsEntity> {
    const news = await this.newsRepository.findOneOrFail(
      newsWhereUniqueInputDto.id
    );
    await this.newsRepository.delete(newsWhereUniqueInputDto.id);
    return news;
  }
}

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { NewsService } from '@egamings/nest-ms-rabbit/services';

import {
  News,
  NewsCreateArgs,
  NewsGateway,
  NewsUpdateArgs,
  NewsWhereUniqueArgs,
} from '@egamings/shared/domain';

@Controller()
export class NewsController implements NewsGateway {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern('findAllNews')
  findAllNews(): Promise<News[]> {
    return this.newsService.findAll();
  }

  @MessagePattern('createNews')
  createNews(args: NewsCreateArgs): Promise<News> {
    return this.newsService.create(args);
  }

  @MessagePattern('updateNews')
  updateNews(args: NewsUpdateArgs): Promise<News> {
    return this.newsService.update(args);
  }

  @MessagePattern('deleteNews')
  deleteNews(args: NewsWhereUniqueArgs): Promise<News> {
    return this.newsService.delete(args);
  }
}

import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { NewsService } from '@egamings/nest-ms-rabbit/services';

import {
  INews,
  INewsCreateInput,
  INewsGateway,
  INewsUpdateArgs,
  INewsWhereUniqueInput,
} from '@egamings/shared/domain';

@Controller()
export class NewsController implements INewsGateway {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern('findAllNews')
  findAllNews(): Promise<INews[]> {
    return this.newsService.findAllNews();
  }

  @MessagePattern('createNews')
  createNews(data: INewsCreateInput): Promise<INews> {
    return this.newsService.createNews(data);
  }

  @MessagePattern('updateNews')
  updateNews(args: INewsUpdateArgs): Promise<INews> {
    return this.newsService.updateNews(args);
  }

  @MessagePattern('deleteNews')
  deleteNews(where: INewsWhereUniqueInput): Promise<INews> {
    return this.newsService.deleteNews(where);
  }
}

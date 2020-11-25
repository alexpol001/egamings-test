import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { NewsService } from '@egamings/nest-ms-rabbit/services';

import {
  NewsCreateInputDto,
  NewsUpdateInputDto,
  NewsWhereUniqueInputDto,
} from '@egamings/shared/nest/domain';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @MessagePattern('findAllNews')
  findAll() {
    return this.newsService.findAll();
  }

  @MessagePattern('createNews')
  create(@Payload() newsCreateInputDto: NewsCreateInputDto) {
    return this.newsService.create(newsCreateInputDto);
  }

  @MessagePattern('updateNews')
  update(@Payload() newsUpdateInputDto: NewsUpdateInputDto) {
    return this.newsService.update(newsUpdateInputDto);
  }

  @MessagePattern('deleteNews')
  delete(@Payload() newsWhereUniqueInputDto: NewsWhereUniqueInputDto) {
    return this.newsService.delete(newsWhereUniqueInputDto);
  }
}

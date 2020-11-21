import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs/operators';
import { RABBIT_CLIENT } from '../shared/clients/clients.constants';
import {
  NewsCreateInput,
  News,
  NewsUpdateInput,
  NewsWhereUniqueInput,
} from './news.model';

@Resolver((of) => String)
export class NewsResolver {
  constructor(
    @Inject(RABBIT_CLIENT) private readonly rabbitClient: ClientProxy
  ) {}

  @Query((returns) => [News])
  async findAllNews(): Promise<News[]> {
    return this.rabbitClient
      .send('findAllNews', [])
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => News)
  async createNews(@Args('data') data: NewsCreateInput): Promise<News> {
    return this.rabbitClient
      .send('createNews', data)
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => News)
  async updateNews(
    @Args('data') data: NewsUpdateInput,
    @Args('where') where: NewsWhereUniqueInput
  ): Promise<News> {
    return this.rabbitClient
      .send('updateNews', {
        data,
        where,
      })
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => News)
  async deleteNews(@Args('where') where: NewsWhereUniqueInput): Promise<News> {
    return this.rabbitClient
      .send('deleteNews', where)
      .pipe(timeout(5000))
      .toPromise();
  }
}

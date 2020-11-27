import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';

import { INews, INewsGateway } from '@egamings/shared/domain';

import { timeout } from 'rxjs/operators';
import { RABBIT_CLIENT } from '../shared/clients/clients.constants';

import {
  NewsCreateInput,
  News,
  NewsWhereUniqueInput,
  NewsUpdateArgs,
} from './news.model';

@Resolver((of) => String)
export class NewsResolver implements INewsGateway {
  constructor(
    @Inject(RABBIT_CLIENT) private readonly rabbitClient: ClientProxy
  ) {}

  @Query((returns) => [News])
  findAllNews(): Promise<INews[]> {
    return this.rabbitClient
      .send('findAllNews', [])
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => News)
  createNews(@Args('data') data: NewsCreateInput): Promise<INews> {
    return this.rabbitClient
      .send('createNews', data)
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => News)
  updateNews(@Args() args: NewsUpdateArgs): Promise<INews> {
    return this.rabbitClient
      .send('updateNews', args)
      .pipe(timeout(5000))
      .toPromise();
  }

  @Mutation((returns) => News)
  deleteNews(@Args('where') where: NewsWhereUniqueInput): Promise<INews> {
    return this.rabbitClient
      .send('deleteNews', where)
      .pipe(timeout(5000))
      .toPromise();
  }
}

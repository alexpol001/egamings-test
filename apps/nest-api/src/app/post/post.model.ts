import { Type } from '@angular/core';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType()
export class PostDummy {
  @Field()
  _dummy: string;
}

@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
export class DeletePostInput {
  @Field((type) => [Number])
  ids: number[];
}

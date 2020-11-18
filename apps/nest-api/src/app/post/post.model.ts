import { Type } from '@angular/core';
import { ObjectType, Field, InputType } from '@nestjs/graphql';

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
export class PostDeleteInput {
  @Field((type) => [Number])
  ids: number[];
}

@InputType()
export class PostCreateInput {
  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
export class PostUpdateInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  content: string;
}

@InputType()
export class PostWhereUniqueInput {
  @Field()
  id: number;
}

import { ObjectType, Field } from '@nestjs/graphql';

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

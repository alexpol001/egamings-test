import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Post as IPost } from '@egamings/shared/nest/domain';

@ObjectType()
export class Post implements IPost {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;
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
  id: string;
}

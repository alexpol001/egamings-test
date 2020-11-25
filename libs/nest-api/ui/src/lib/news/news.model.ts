import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { News as INews } from '@egamings/shared/nest/domain';

@ObjectType()
export class News implements INews {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
export class NewsCreateInput {
  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
export class NewsUpdateInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  content: string;
}

@InputType()
export class NewsWhereUniqueInput {
  @Field()
  id: number;
}

import { ObjectType, Field, InputType, ArgsType } from '@nestjs/graphql';
import {
  INewsCreateInput,
  INewsUpdateArgs,
  INewsUpdateInput,
  INewsWhereUniqueInput,
  INews,
} from '@egamings/shared/domain';

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
export class NewsCreateInput implements INewsCreateInput {
  @Field()
  title: string;

  @Field()
  content: string;
}

@InputType()
export class NewsWhereUniqueInput implements INewsWhereUniqueInput {
  @Field()
  id: number;
}

@InputType()
export class NewsUpdateInput implements INewsUpdateInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  content: string;
}

@ArgsType()
export class NewsUpdateArgs implements INewsUpdateArgs {
  @Field()
  data: NewsUpdateInput;

  @Field()
  where: NewsWhereUniqueInput;
}

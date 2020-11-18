export class PostCreateInputDto {
  readonly title: string;

  readonly content: string;
}

export class PostWhereUniqueInputDto {
  readonly id: number;
}

export class PostUpdateDataInputDto {
  readonly title: string;

  readonly content: string;
}

export class PostUpdateInputDto {
  readonly data: PostUpdateDataInputDto;

  readonly where: PostWhereUniqueInputDto;
}

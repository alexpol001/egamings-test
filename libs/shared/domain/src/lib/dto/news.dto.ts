export class NewsCreateInputDto {
  readonly title: string;

  readonly content: string;
}

export class NewsWhereUniqueInputDto {
  readonly id: number;
}

export class NewsUpdateDataInputDto {
  readonly title: string;

  readonly content: string;
}

export class NewsUpdateInputDto {
  readonly data: NewsUpdateDataInputDto;

  readonly where: NewsWhereUniqueInputDto;
}

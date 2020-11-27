export interface NewsCreateArgs {
  readonly title: string;

  readonly content: string;
}

export interface NewsWhereUniqueArgs {
  readonly id: number;
}

export interface NewsUpdateDataArgs {
  readonly title: string;

  readonly content: string;
}

export interface NewsUpdateArgs {
  readonly data: NewsUpdateDataArgs;

  readonly where: NewsWhereUniqueArgs;
}

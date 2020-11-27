export interface INewsCreateInput {
  readonly title: string;

  readonly content: string;
}

export interface INewsWhereUniqueInput {
  readonly id: number;
}

export interface INewsUpdateInput {
  readonly title: string;

  readonly content: string;
}

export interface INewsUpdateArgs {
  readonly data: INewsUpdateInput;

  readonly where: INewsWhereUniqueInput;
}

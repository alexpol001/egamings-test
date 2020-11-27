export interface IPostCreateInput {
  readonly title: string;

  readonly content: string;
}

export interface IPostWhereUniqueInput {
  readonly id: string;
}

export interface IPostUpdateInput {
  readonly title: string;

  readonly content: string;
}

export interface IPostUpdateArgs {
  readonly data: IPostUpdateInput;

  readonly where: IPostWhereUniqueInput;
}

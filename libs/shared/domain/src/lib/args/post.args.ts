export interface PostCreateArgs {
  readonly title: string;

  readonly content: string;
}

export interface PostWhereUniqueArgs {
  readonly id: string;
}

export interface PostUpdateDataArgs {
  readonly title: string;

  readonly content: string;
}

export interface PostUpdateArgs {
  readonly data: PostUpdateDataArgs;

  readonly where: PostWhereUniqueArgs;
}

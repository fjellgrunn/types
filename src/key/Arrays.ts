export type ItemTypeArray<
  S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never,
> =
([L5] extends [never] ?
  ([L4] extends [never] ?
    ([L3] extends [never] ?
      ([L2] extends [never] ?
        ([L1] extends [never] ?
          [S] :
          [S, L1]) :
        [S, L1, L2]) :
      [S, L1, L2, L3]) :
    [S, L1, L2, L3, L4]) :
  [S, L1, L2, L3, L4, L5]);

export type AllItemTypeArrays<
  S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never,
> = readonly [S] |
  readonly [S, L1] |
  readonly [S, L1, L2] |
  readonly [S, L1, L2, L3] |
  readonly [S, L1, L2, L3, L4] |
  readonly [S, L1, L2, L3, L4, L5];


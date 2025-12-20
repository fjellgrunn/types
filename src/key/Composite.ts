import type { UUID } from './UUID';
import type { LocKeyArray } from './Location';

export interface ComKey<
  S extends string,
  L1 extends string = never,
  L2 extends string = never,
  L3 extends string = never,
  L4 extends string = never,
  L5 extends string = never
> {
  readonly kt: S,
  readonly pk: UUID | string | number,
  readonly loc: LocKeyArray<L1, L2, L3, L4, L5>
};


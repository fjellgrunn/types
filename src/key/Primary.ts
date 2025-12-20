import type { UUID } from './UUID';

export interface PriKey<
  S extends string,
> {
  readonly kt: S,
  readonly pk: UUID | string | number,
  readonly loc?: never
};


import type { ComKey, PriKey } from '../key';
import type { Item } from './Item';

/**
 * This is a generic item event, and it's designed to make sure we have the ability to define not just
 * the required fields, but also the optional fields.
 */
export interface ItemEvent {
  at: Date | null;
  by?: ComKey<any, any | never, any | never, any | never, any | never, any | never> | PriKey<any>;
  agg?: Item<any, any, any, any, any, any>;
}

/**
 * This is a required item event, and it's here mainly to define that there are events that must be present.
 */
export interface RequiredItemEvent extends ItemEvent {
  at: Date;
}

export type Evented = Record<string, ItemEvent>;

export interface Timestamped extends Evented {
  created: RequiredItemEvent;
  updated: RequiredItemEvent;
}

export interface Deletable extends Partial<Evented> {
  deleted: ItemEvent;
}

export type ManagedEvents = Timestamped & Deletable;


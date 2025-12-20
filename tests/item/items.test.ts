import { describe, expect, it } from 'vitest';
import {
  Deletable,
  Evented,
  Identified,
  Item,
  ItemEvent,
  ItemProperties,
  ManagedEvents,
  Propertied,
  RecursivePartial,
  ReferenceItem,
  ReferenceItems,
  References,
  RequiredItemEvent,
  Timestamped,
  TypesProperties
} from '../../src/item';
import { ComKey, LocKey, PriKey } from '../../src/key';

describe('items.ts types', () => {
  it('should allow for RecursivePartial', () => {
        interface ComplexObject {
            a: string;
            b: number;
            c: {
                d: boolean;
                e: string[];
                f: { g: number };
            };
        }

        const partial: RecursivePartial<ComplexObject> = {
          a: 'test',
          c: {
            e: ['one', 'two'],
            f: {},
          },
        };

        expect(partial.a).toBe('test');
        expect(partial.c?.e).toEqual(['one', 'two']);
        expect(partial).toBeDefined();
  });

  it('should correctly type Identified', () => {
    const priKey: PriKey<'MyType'> = { kt: 'MyType', pk: 'id1' };
    const locKey: LocKey<'L1'> = { kt: 'L1', lk: 'loc1' };
    const comKey: ComKey<'MyType', 'L1'> = { kt: 'MyType', pk: 'id2', loc: [locKey] };

    const identifiedWithPriKey: Identified<'MyType'> = {
      key: priKey,
    };
    expect(identifiedWithPriKey.key).toBe(priKey);

    const identifiedWithComKey: Identified<'MyType', 'L1'> = {
      key: comKey,
    };
    expect(identifiedWithComKey.key).toBe(comKey);
  });

  it('should correctly type Propertied', () => {
    const prop: Propertied = {
      name: 'test',
      value: 123,
    };
    expect(prop.name).toBe('test');
  });

  it('should correctly type ItemEvent', () => {
    const event: ItemEvent = {
      at: new Date(),
    };
    expect(event.at).toBeInstanceOf(Date);
    const nullEvent: ItemEvent = {
      at: null,
    };
    expect(nullEvent.at).toBeNull();
  });

  it('should correctly type RequiredItemEvent', () => {
    const event: RequiredItemEvent = {
      at: new Date(),
    };
    expect(event.at).toBeInstanceOf(Date);
  });

  it('should correctly type Evented', () => {
    const events: Evented = {
      custom: { at: new Date() },
    };
    expect(events.custom.at).toBeInstanceOf(Date);
  });

  it('should correctly type Timestamped', () => {
    const timestamps: Timestamped = {
      created: { at: new Date() },
      updated: { at: new Date() },
    };
    expect(timestamps.created.at).toBeInstanceOf(Date);
    expect(timestamps.updated.at).toBeInstanceOf(Date);
  });

  it('should correctly type Deletable', () => {
    const deletable: Deletable = {
      deleted: { at: new Date() },
    };
    expect(deletable.deleted.at).toBeInstanceOf(Date);
  });

  it('should correctly type ManagedEvents', () => {
    const events: ManagedEvents = {
      created: { at: new Date() },
      updated: { at: new Date() },
      deleted: { at: null },
    };
    expect(events.created.at).toBeInstanceOf(Date);
    expect(events.deleted.at).toBeNull();
  });

  it('should correctly type ItemProperties', () => {
    const props: ItemProperties = {
      created: { at: new Date() },
      updated: { at: new Date() },
      deleted: { at: null },
      name: 'test',
      age: 30,
    };
    expect(props.name).toBe('test');
    expect(props.created.at).toBeInstanceOf(Date);
  });

  it('should correctly type TypesProperties', () => {
    const props: TypesProperties = {
      created: { at: new Date() },
      updated: { at: new Date() },
      deleted: { at: null },
    };
    expect(props.created.at).toBeInstanceOf(Date);
  });

  it('should correctly type ReferenceItem', () => {
    const priKey: PriKey<'MyType'> = { kt: 'MyType', pk: 'id1' };
    const ref: ReferenceItem<'MyType'> = {
      key: priKey,
    };
    expect(ref.key).toBe(priKey);
  });

  it('should correctly type ReferenceItems', () => {
    const priKey: PriKey<'MyType'> = { kt: 'MyType', pk: 'id1' };
    const refs: ReferenceItems<'MyType'> = [
      { key: priKey },
    ];
    expect(refs[0].key).toBe(priKey);
  });

  it('should correctly type References', () => {
    const priKey: PriKey<'MyType'> = { kt: 'MyType', pk: 'id1' };
    const refs: References = {
      myRef: { key: priKey },
    };
    expect(refs.myRef.key).toBe(priKey);
  });

  it('should correctly type Item', () => {
    const priKey: PriKey<'MyType'> = { kt: 'MyType', pk: 'id1' };
    const item: Item<'MyType'> = {
      key: priKey,
      state: { name: 'test' },
    };
    expect(item.key).toBe(priKey);
    expect(item.state.name).toBe('test');
  });
});


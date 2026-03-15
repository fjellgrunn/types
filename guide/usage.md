# Usage Guide

Comprehensive usage guidance for `@fjell/types`.

## Installation

```bash
npm install @fjell/types
```

## API Highlights

- `PriKey`, `ComKey`, and related key structures from key exports
- `Item` and item-shape contracts from item exports
- `Coordinate` typing helpers from Coordinate exports
- `Query` and operations type definitions for data access flows

## Quick Example

```ts
import type { PriKey, ComKey, Coordinate } from "@fjell/types";

type Widget = {
  pri: PriKey;
  com: ComKey;
  name: string;
};

const widgetCoordinate: Coordinate = {
  scope: "widget",
  itemType: ["tenant", "widget"],
};
```

## Model Consumption Rules

1. Import from the package root (`@fjell/types`) instead of deep-internal paths unless explicitly documented.
2. Keep usage aligned with exported public symbols listed in this guide.
3. Prefer explicit typing at package boundaries so generated code remains robust during upgrades.
4. Keep error handling deterministic and map infrastructure failures into domain-level errors.
5. Co-locate integration wrappers in your app so model-generated code has one canonical entry point.

## Best Practices

- Keep examples and abstractions consistent with existing Fjell package conventions.
- Favor composable wrappers over one-off inline integration logic.
- Add targeted tests around generated integration code paths.

# @fjell/types - Agentic Guide

## Purpose

Foundational Fjell type contracts for keys, items, queries, coordinates, and operations.

This guide is optimized for AI-assisted code generation and integration workflows.

## Documentation

- **[Usage Guide](./usage.md)** - API-oriented usage patterns and model-safe examples
- **[Integration Guide](./integration.md)** - Architecture placement, composition rules, and implementation guidance

## Key Capabilities

- Defines canonical key and item interfaces used across all Fjell packages
- Provides coordinate and query typing primitives for provider and library layers
- Keeps cross-package API signatures compatible through shared contracts

## Installation

```bash
npm install @fjell/types
```

## Public API Highlights

- `PriKey`, `ComKey`, and related key structures from key exports
- `Item` and item-shape contracts from item exports
- `Coordinate` typing helpers from Coordinate exports
- `Query` and operations type definitions for data access flows

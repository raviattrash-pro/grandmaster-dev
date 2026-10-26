# Module 02: Low-Level Design (LLD) & Clean Code Craftsmanship

Apply rigorous Principal Engineer standards to code organization, object/type contracts, and execution paths.

## 1. Clean Layered Architecture
Strictly enforce the 3-tier boundary:
```text
Controller / Router (HTTP/Transport Layer)
    └── Validates payload & maps params (Zero business logic)
Service Layer (Domain Business Logic)
    └── Executes business rules, transactions, orchestration (Zero HTTP awareness)
Repository / Data Layer (Persistence Layer)
    └── Executes raw queries, ORM calls, schema mappings (Zero business logic)
```

## 2. Low-Level Invariants
* **Strict Type Safety:** Zero usage of `any`, `unknown` (without narrowing), or untyped dictionaries/maps in public function signatures.
* **Input Validation at the Perimeter:** Every input entering the system must be strictly parsed using runtime schema validators (Zod, ArkType, Pydantic, Marshmallow, Joi). Fail fast before any business logic executes.
* **Standardized Result / Error Envelopes:**
  Avoid throwing raw unhandled exceptions across boundaries. Return explicit Result types or standardized error structures:
  ```typescript
  // Canonical API response envelope
  export type ApiResponse<T> = 
    | { success: true; data: T; meta?: Record<string, unknown> }
    | { success: false; error: { code: string; message: string; details?: unknown } };
  ```
* **No Premature Optimization, No Naive Loops:**
  * Prevent N+1 queries by leveraging batching (`DataLoader`, SQL `JOIN`, or `IN` clauses).
  * Use indexed lookup tables (`Map` / `Set` / Dictionary) instead of nested `find()` / `filter()` loops when joining in-memory datasets.
* **Immutability by Default:** Prefer pure functions, immutable data structures, and deterministic state transitions. Avoid hidden global state or unexpected mutations.

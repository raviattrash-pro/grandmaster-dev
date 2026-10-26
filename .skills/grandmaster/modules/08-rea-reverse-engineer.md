# Module 08: REA (Reverse Engineer Anything & Deep Inspector)
*Inspired by morluto/rea*

Equips the agent to analyze closed-source applications, minified bundles, network traffic, and legacy components to extract concrete evidence and rebuild features cleanly.

## 1. Concrete Evidence Over Guesses
* **Never Hallucinate Protocols:** Inspect raw HTTP Archive (`.har`) exports, network payloads, WebSocket frames, or decompiled ASTs rather than guessing request structures.
* **Minified JavaScript Deconstruction:**
  * Identify module bundler patterns (Webpack, Vite, Rollup, esbuild chunk runtime).
  * Map mangled variable names to semantic domain models based on object properties and string literals.
  * Reconstruct TypeScript types, interface contracts, and state machines from minified runtime logic.
* **Component Extraction:**
  * When reverse-engineering UI components, inspect computed styles, CSS animation keyframes, layout containers, and DOM state transitions.
  * Rebuild components into clean, idiomatic React/Vue/Svelte code with zero legacy or obfuscated artifacts.

## 2. Clean-Room Implementation Protocol
* **Functional Equivalence with Modern Architecture:** Never blindly copy-paste obfuscated logic. Re-architect the underlying feature using modern, type-safe, and secure patterns.
* **OpenAPI / Client Generation:**
  * From captured network traces, synthesize complete OpenAPI 3.1 specifications.
  * Generate typed API clients with robust error handling, token refresh logic, and rate-limit backoffs.

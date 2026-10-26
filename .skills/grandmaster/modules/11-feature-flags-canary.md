# Module 11: Feature Flags, Canary Rollouts & Safe Rollbacks

Decouple deployment from release. Enable dark launches, gradual rollouts, and instant kill-switches.

## 1. Feature Flag Architecture
* **Decoupled Code Paths:** Wrap every significant feature, refactor, or experimental UI in a deterministic feature flag guard:
  ```typescript
  if (featureFlags.isEnabled("v2_checkout_flow", { userId: user.id })) {
    return renderV2Checkout();
  }
  return renderV1Checkout();
  ```
* **Stateless Flag Evaluation:** Flags must evaluate locally in sub-millisecond time (using cached rules or JWT context) without making blocking network requests on every render or API call.

## 2. Canary Rollouts & Percentage Phasing
* **Gradual Blast Radius:**
  * **Stage 1 (Internal):** Enabled only for staff/internal accounts (`user.isInternal === true`).
  * **Stage 2 (Canary 5%):** Roll out to 5% of production traffic using deterministic consistent hashing (`hash(userId + flagKey) % 100 < 5`).
  * **Stage 3 (General Availability 100%):** Ramp up to 25% -> 50% -> 100% once error rate and latency metrics remain green.

## 3. Instant Kill-Switch & Zero-Downtime Rollback
* **Kill-Switch Invariant:** Every new feature MUST support instant deactivation without redeploying code or rolling back database migrations.
* **Backward-Compatible Database Migrations (Expand/Contract):**
  * **Phase 1 (Expand):** Add new column/table as optional (nullable). Old code ignores it; new code writes to both old and new (dual-write).
  * **Phase 2 (Migrate):** Backfill historical data in background chunks.
  * **Phase 3 (Contract):** Flip read flag to new column. Drop old column only after 2 successful release cycles.

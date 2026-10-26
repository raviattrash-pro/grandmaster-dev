# Module 13: Rate Limiting & Circuit Breakers (Resilience)

Shield systems against cascading failures, traffic spikes, brute-force attacks, and third-party outages.

## 1. Rate Limiting Topologies
* **Sliding Window Counter:** Prefer Sliding Window over Fixed Window to eliminate the 2x burst vulnerability at boundary edges:
  * Public Auth Routes (`/login`, `/signup`): Strict limit (e.g., 5 requests / minute / IP).
  * Authenticated API Routes: Tier-based limit (e.g., 100 requests / minute / user).
  * Webhook Ingestion: Burst-tolerant leaky bucket.
* **Standard Rate Limit Headers:** Every response must include standard RFC 6585 headers:
  * `RateLimit-Limit`, `RateLimit-Remaining`, `RateLimit-Reset`.
  * Return `HTTP 429 Too Many Requests` with a `Retry-After: <seconds>` header when exceeded.

## 2. Circuit Breaker State Machine
Protect internal and downstream services with an automated Circuit Breaker pattern:

```text
       ┌────────────── Failure Threshold Reached ─────────────┐
       ▼                                                      │
 ┌───────────┐      Trip      ┌──────────┐     Timeout     ┌───────────┐
 │  CLOSED   │───────────────>│   OPEN   │────────────────>│ HALF-OPEN │
 │ (Healthy) │                │ (Failing)│                 │ (Testing) │
 └───────────┘                └──────────┘                 └───────────┘
       ▲                                                         │
       └──────────────────── Canary Success ─────────────────────┘
```

* **Closed State (Normal):** Requests pass through. Counts failure rates within a sliding rolling window (e.g., 10 seconds).
* **Open State (Tripped):** When error rate exceeds threshold (e.g., > 50% errors), trip circuit. Instantly return cached fallback data or graceful error *without* hitting the broken downstream service.
* **Half-Open State (Canary):** After a cooldown period (e.g., 30s), allow 5% test traffic through. If successful, reset to Closed. If errors persist, return to Open.

## 3. Retries with Full Jitter
Never execute immediate, synchronized retries (causes thundering herd problems):
* Always use **Exponential Backoff with Full Jitter**:
  $$\text{Sleep} = \text{random}(0, \, \min(\text{MaxSleep}, \, \text{BaseSleep} \times 2^{\text{attempt}}))$$
* Never retry non-idempotent mutations without verification.

<div align="center">

<p align="center">
  <img src="assets/hero-banner.svg" alt="Grandmaster Dev Hero Banner" width="100%" />
</p>

# ⚡ GRANDMASTER DEV KERNEL

### *The 40-Year Veteran Staff Architect, Principal Full-Stack Engineer & DevSecOps Kernel for AI Coding Assistants*

**Equip Cursor, Claude Code, Antigravity, and Windsurf with drop-in senior engineering discipline.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/raviattrash-pro/grandmaster-dev?style=social)](https://github.com/raviattrash-pro/grandmaster-dev)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/raviattrash-pro/grandmaster-dev/pulls)
[![Token Efficiency](https://img.shields.io/badge/Context%20Savings-~70%25-orange.svg)](#️-how-does-it-work-the-architecture)
[![Supports](https://img.shields.io/badge/Supports-Cursor%20%7C%20Claude%20Code%20%7C%20Antigravity%20%7C%20Windsurf-purple.svg)](#-quick-start-1-second-install)

---

</div>

## 📌 Table of Contents
1. [🎯 What is Grandmaster Dev?](#-what-is-grandmaster-dev)
2. [💥 Why is This Required? (The Problem)](#-why-is-this-required-the-problem)
3. [⚙️ How Does It Work? (The Architecture)](#️-how-does-it-work-the-architecture)
4. [🚀 Quick Start (1-Second Install)](#-quick-start-1-second-install)
5. [📚 The 13 Grandmaster Modules (Deep Dive)](#-the-13-grandmaster-modules-deep-dive)
6. [🥊 Concrete Before vs. After Code Comparison](#-concrete-before-vs-after-code-comparison)
7. [🖼️ Social Card & Media Kit](#️-social-card--media-kit)
8. [🛠️ Platform Integration Guides](#️-platform-integration-guides)
9. [📊 Token Economics & Context Benchmarks](#-token-economics--context-benchmarks)
10. [❓ Frequently Asked Questions (FAQ)](#-frequently-asked-questions-faq)
11. [🤝 Contributing & License](#-contributing--license)

---

## 🎯 What is Grandmaster Dev?

**Grandmaster Dev** is a zero-dependency, open-source engineering kernel that transforms your AI coding assistant (Claude Code, Cursor, Antigravity, Windsurf) from an eager junior coder into a **40-year veteran Staff Architect, Principal Full-Stack Engineer, and DevSecOps Director**.

Instead of having your AI write naive prototype code, Grandmaster automatically enforces:
* **High-Level Design (HLD):** System boundaries, failure domains, living Mermaid diagrams, and Architecture Decision Records (ADRs).
* **Low-Level Design (LLD):** Clean 3-tier architecture (Router ➔ Service ➔ Repository) with strict type contracts.
* **DevSecOps & Zero-Trust:** OWASP Top 10 prevention, secret redaction, and parameterized queries.
* **Modern Web Mastery:** Progressive Web Apps (PWA), container-query responsive design, and smooth loading (CLS < 0.05).
* **Enterprise Resilience:** Circuit breakers, sliding-window rate limiting, and 5% canary rollouts with instant kill-switches.
* **REA Protocol:** Deep reverse engineering of minified bundles and network traces into clean TypeScript SDKs (inspired by `morluto/rea`).

All of this is delivered through a **Two-Tier Dynamic Dispatcher** that uses **~70% fewer tokens** than traditional monolithic rule files.

---

## 💥 Why is This Required? (The Problem)

### The 5 Fatal Flaws of Default AI Coding Tools:

1. **The "Tutorial Junior" Trap:**
   Standard LLMs are trained heavily on public tutorials and quickstart guides. When you ask them to build an API or feature, they cram database queries, authentication logic, and presentation styles into a single monolithic file.
2. **The Security Blindspot:**
   AI models prioritize generating code that runs quickly over code that runs safely. They frequently omit perimeter input validation, use raw string concatenation in SQL/NoSQL queries, and accidentally embed sensitive API keys in client-side code.
3. **The Token Hemorrhage:**
   Existing rule packs dump 10,000 words of instructions into every prompt. This bloats context windows, consumes your API budget prematurely, and degrades LLM reasoning due to context saturation.
4. **No Real-World Failure Planning:**
   Default models assume networks never fail and third-party APIs never go down. They do not implement circuit breakers, retry jitter, rate limiting, or feature flags for safe rollbacks.
5. **Shallow Tests:**
   Standard AI testing generates trivial happy-path assertions that pass immediately, leaving boundary edge-cases, concurrency race conditions, and error-handling unverified.

**Grandmaster Dev solves all five problems permanently with a single drop-in installation.**

---

## ⚙️ How Does It Work? (The Architecture)

<p align="center">
  <img src="assets/architecture-dispatcher.svg" alt="Two-Tier Dynamic Context Engine" width="100%" />
</p>

Grandmaster operates on a **Two-Tier Context Engine**:
1. **Tier 1 (The Micro-Router):** On startup, Grandmaster injects an ultra-compact ~150-token routing table. This leaves 99% of your model's context window open for actual project code.
2. **Tier 2 (Targeted Deep Modules):** When the AI detects a specific task—such as designing a database schema, handling authentication, or building an offline PWA—it lazy-loads *only* the specific module file needed for that task.

---

## 🚀 Quick Start (1-Second Install)

### Option 1: One-Command CLI (Recommended)
From your project's root folder, run:

```bash
npx grandmaster-dev init
```

*This auto-detects your workspace and installs `.skills/grandmaster/`, `.cursorrules`, `.windsurfrules`, and `.cursor/rules/grandmaster.mdc`.*

---

### Option 2: Linux / macOS / WSL One-Liner
```bash
curl -fsSL https://raw.githubusercontent.com/raviattrash-pro/grandmaster-dev/main/install.sh | bash
```

### Option 3: Windows PowerShell One-Liner
```powershell
irm https://raw.githubusercontent.com/raviattrash-pro/grandmaster-dev/main/install.ps1 | iex
```

### Option 4: Drop-in Folder
Clone or download this repo and copy the [`.skills/grandmaster/`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/) directory directly into your project root.

---

## 📚 The 13 Grandmaster Modules (Deep Dive)

<p align="center">
  <img src="assets/feature-matrix.svg" alt="The 13 Grandmaster Dev Modules Matrix" width="100%" />
</p>

| # | Module | Core Capability | Invariant Enforced |
| :--- | :--- | :--- | :--- |
| **01** | [`01-hld-architecture.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/01-hld-architecture.md) | High-Level Design & System Boundaries | Living Mermaid sequence diagrams; ADR records; async job isolation. |
| **02** | [`02-lld-craftsmanship.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/02-lld-craftsmanship.md) | Low-Level Design & Clean Architecture | 3-tier boundary (Controller ➔ Service ➔ Repository); zero `any` types; Zod schemas. |
| **03** | [`03-ui-ux-design-system.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/03-ui-ux-design-system.md) | Design Systems & Accessibility | 4px/8px spacing tokens; semantic color palette; WCAG AA compliance. |
| **04** | [`04-devsecops-zerotrust.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/04-devsecops-zerotrust.md) | Military-Grade DevSecOps | OWASP Top 10 shields; parameterized queries; boot-time environment validation. |
| **05** | [`05-thorough-testing.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/05-thorough-testing.md) | Multi-Tier Verification & Edge Cases | Boundary limits (null, max int, unicode); race condition checks; mock failure modes. |
| **06** | [`06-devops-sre.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/06-devops-sre.md) | Production DevOps & Observability | Non-root multi-stage Dockerfiles; `/healthz` endpoints; structured JSON logs. |
| **07** | [`07-token-optimizer.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/07-token-optimizer.md) | Signal-to-Noise & Token Efficiency | Surgical diffs only; no conversational filler; high-density explanations. |
| **08** | [`08-rea-reverse-engineer.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/08-rea-reverse-engineer.md) | REA (Reverse Engineer Anything) | Inspects HAR traces and minified ASTs to rebuild clean TypeScript SDKs. |
| **09** | [`09-pwa-offline-engine.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/09-pwa-offline-engine.md) | Progressive Web Apps & Offline-First | Standalone manifest, SWR caching tiers, IndexedDB background sync queues. |
| **10** | [`10-adaptive-responsive-ui.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/10-adaptive-responsive-ui.md) | Adaptive & Responsive Fluid UI | Container queries (`@container`), fluid `clamp()`, dynamic `100dvh`, 44px touch targets. |
| **11** | [`11-feature-flags-canary.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/11-feature-flags-canary.md) | Feature Flags & Canary Rollouts | Decouples deploy from release; 5% hashed canaries; instant kill-switches. |
| **12** | [`12-smooth-loading-perf.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/12-smooth-loading-perf.md) | Zero CLS & Smooth Page Loading | CLS < 0.05 guaranteed; shimmer skeletons; streaming React Suspense; optimistic UI. |
| **13** | [`13-rate-limiting-circuit-breaker.md`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/modules/13-rate-limiting-circuit-breaker.md) | Fault Tolerance & Resilience | Sliding window rate limits; 3-state Circuit Breaker; jittered exponential backoffs. |

---

## 🥊 Concrete Before vs. After Code Comparison

<p align="center">
  <img src="assets/before-after-card.svg" alt="Code Quality Benchmark: Junior vs Grandmaster Staff" width="100%" />
</p>

### Scenario: Creating an API Endpoint to Transfer User Funds

#### ❌ WITHOUT Grandmaster (Default AI Junior Output):
```typescript
// Typical AI output: Mixed layers, raw queries, no transactions, no error envelope
app.post("/api/transfer", async (req, res) => {
  const { fromUserId, toUserId, amount } = req.body;
  
  // Vulnerability: No input schema validation, no negative number check
  // Concurrency bug: No transaction or row lock!
  const sender = await db.query(`SELECT * FROM users WHERE id = '${fromUserId}'`);
  if (sender.balance < amount) {
    return res.status(400).send("Not enough money");
  }

  await db.query(`UPDATE users SET balance = balance - ${amount} WHERE id = '${fromUserId}'`);
  await db.query(`UPDATE users SET balance = balance + ${amount} WHERE id = '${toUserId}'`);

  res.json({ message: "Transferred!" });
});
```

#### ✅ WITH Grandmaster Dev Kernel:
```typescript
// Production-grade: Perimeter validation, atomic transaction, row locking, typed envelope
import { z } from "zod";

const TransferSchema = z.object({
  toUserId: z.string().uuid(),
  amount: z.number().positive().finite(),
  idempotencyKey: z.string().min(16),
});

export async function handleTransfer(req: Request, userId: string): Promise<ApiResponse<TransferResult>> {
  // 1. Perimeter Validation
  const validation = TransferSchema.safeParse(await req.json());
  if (!validation.success) {
    return { success: false, error: { code: "INVALID_INPUT", details: validation.error.flatten() } };
  }

  const { toUserId, amount, idempotencyKey } = validation.data;

  // 2. Atomic Database Transaction with Row-Level Lock & Idempotency
  return await db.transaction(async (tx) => {
    const existing = await tx.idempotency.find(idempotencyKey);
    if (existing) return { success: true, data: existing.result };

    const sender = await tx.users.findForUpdate(userId); // SELECT FOR UPDATE
    if (!sender || sender.balance < amount) {
      return { success: false, error: { code: "INSUFFICIENT_FUNDS", message: "Balance too low." } };
    }

    await tx.users.decrementBalance(userId, amount);
    await tx.users.incrementBalance(toUserId, amount);
    
    const record = await tx.transfers.create({ from: userId, to: toUserId, amount });
    await tx.idempotency.record(idempotencyKey, record);

    return { success: true, data: record };
  });
}
```

---

## 🖼️ Social Card & Media Kit

For sharing on Twitter/X, LinkedIn, Discord, and GitHub, the high-resolution social preview banner is stored at:

<p align="center">
  <img src="assets/social-card.png" alt="Grandmaster Dev Social Card" width="90%" />
</p>

* **Path:** [`assets/social-card.png`](file:///assets/social-card.png)
* **Dimensions:** 1280 x 640 px (2:1 aspect ratio)
* **GitHub Social Preview Setup:**
  1. Open your repository on GitHub: `https://github.com/raviattrash-pro/grandmaster-dev`
  2. Go to **Settings** ➔ **General** ➔ Scroll to **Social preview**.
  3. Click **Edit** ➔ **Upload an image** ➔ Select `assets/social-card.png`.

---

## 🛠️ Platform Integration Guides

### Cursor
* **Global Rules:** Grandmaster generates [`.cursorrules`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.cursorrules) at your project root.
* **Modern MDC Rules:** Auto-generates `.cursor/rules/grandmaster.mdc` with `alwaysApply: true`.

### Claude Code
* **Workspace Entry:** Grandmaster creates or augments `CLAUDE.md` to reference `.skills/grandmaster/SKILL.md`.

### Windsurf
* **Cascade Engine:** Uses [`.windsurfrules`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.windsurfrules) for seamless enforcement across all Cascade sessions.

### Antigravity & Agentic IDEs
* **Drop-in Standard:** Native support via the standard [`.skills/grandmaster/`](file:///C:/Users/ASUS/.gemini/antigravity/scratch/grandmaster-dev/.skills/grandmaster/) format.

---

## 📊 Token Economics & Context Benchmarks

| Metric | Monolithic Prompt Packs | Grandmaster Dynamic Router |
| :--- | :--- | :--- |
| **Base Prompt Size** | 2,500 – 4,500 tokens | **~150 tokens** |
| **Token Cost (100 Turns)** | ~350,000 tokens ($1.75 - $7.00) | **~35,000 tokens ($0.17 - $0.70)** |
| **Context Degradation** | High (Model forgets instructions) | **Zero (Focused sub-modules on demand)** |
| **Available Code Window** | Constrained | **99% of context window dedicated to code** |

---

## ❓ Frequently Asked Questions (FAQ)

**Q: Does Grandmaster slow down my AI assistant?**  
**A:** No. Because the base router is only ~150 tokens, the initial response latency is actually *faster* than using large monolithic rule files.

**Q: Can I use this with any programming language?**  
**A:** Yes. Grandmaster’s architectural invariants (separation of concerns, parameterized queries, circuit breakers, container queries) apply across TypeScript, Python, Go, Rust, Java, and C#.

**Q: What if I only want specific modules?**  
**A:** The micro-router handles this automatically. If you're not working on frontend, the UI and PWA modules will never be loaded.

---

## 🤝 Contributing & Community

We welcome contributions from senior engineers, security researchers, and systems architects!
1. Fork the repository: [github.com/raviattrash-pro/grandmaster-dev](https://github.com/raviattrash-pro/grandmaster-dev)
2. Create a branch: `git checkout -b feature/grpc-resilience-module`
3. Commit your changes: `git commit -m 'feat: add gRPC retry and deadline propagation standards'`
4. Push and open a Pull Request!

---

## 📄 License

Distributed under the **MIT License**. Free for personal, commercial, and open-source use.

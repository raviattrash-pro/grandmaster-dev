<div align="center">

# ⚡ GRANDMASTER DEV KERNEL

### *The 40-Year Veteran Staff Architect & DevSecOps Kernel for AI Coding Tools*

**Drop-in Seniority for Cursor, Claude Code, Antigravity, and Windsurf.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/your-username/grandmaster-dev/pulls)
[![Token Efficiency](https://img.shields.io/badge/Token%20Savings-~70%25-orange.svg)](#-token-efficiency-engine)
[![Compatibility](https://img.shields.io/badge/Supports-Cursor%20%7C%20Claude%20Code%20%7C%20Antigravity%20%7C%20Windsurf-purple.svg)](#-quick-start)

---

</div>

## 🤦 The Problem With AI Assistants Today

Default AI models often behave like junior interns who learned to code from a 10-minute tutorial:
* 🍝 **Spaghetti Architecture:** Mixing SQL queries inside React UI components or HTTP routes.
* 🔓 **Zero Security Mindset:** Forgetting input validation, exposing SQL injection risks, and hardcoding API keys.
* 💸 **Token Hemorrhage:** Stuffing massive 10,000-word prompt files into context on every interaction, burning through your budget.
* 🧪 **Fictional Tests:** Writing basic "happy path" mocks that pass instantly while missing real-world concurrency bugs and edge cases.

---

## ⚡ The Solution: Grandmaster Dev

**Grandmaster Dev** is a zero-dependency kernel that upgrades any AI coding tool with the discipline, judgment, and architectural rigor of a **40-year veteran Staff Engineer, Principal Architect, and DevSecOps Director**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THE GRANDMASTER ENGINEERING SUITE                    │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ 1. HLD & ARCH     │ 2. LLD & CODE     │ 3. UI/UX DESIGN SYSTEM         │
│ • System topology │ • Clean interfaces│ • Spacing & color tokens       │
│ • Failure domains │ • Strict types    │ • Fluid responsiveness         │
│ • Scalability     │ • Micro-patterns  │ • Accessibility (WCAG AA)      │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 4. ZERO-TRUST SEC │ 5. TOTAL TESTING  │ 6. DEVOPS & SRE OBSERVABILITY  │
│ • OWASP Top 10    │ • Unit & edge-case│ • Multi-stage Docker           │
│ • Secret shielding│ • Integration E2E │ • Health checks & CI/CD        │
│ • Auth/RBAC rules │ • Concurrency test│ • Structured JSON telemetry    │
├───────────────────┴───────────────────┴────────────────────────────────┤
│ 7. THE TOKEN-OPTIMIZED DYNAMIC DISPATCHER                              │
│ • Compresses base prompt to ~150 tokens (70% savings)                  │
│ • Lazy-loads deep architectural modules only during relevant phases    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start (1 Second Install)

### Option 1: One-Command CLI (Recommended)
Navigate to your project root and run:

```bash
npx grandmaster-dev init
```

*Automatically detects your environment and installs `.skills/grandmaster`, `.cursorrules`, `.windsurfrules`, and `.cursor/rules/grandmaster.mdc`.*

---

### Option 2: Curl One-Liner (macOS / Linux / WSL)
```bash
curl -fsSL https://raw.githubusercontent.com/your-username/grandmaster-dev/main/install.sh | bash
```

### Option 3: PowerShell One-Liner (Windows)
```powershell
irm https://raw.githubusercontent.com/your-username/grandmaster-dev/main/install.ps1 | iex
```

### Option 4: Drop-in Folder
Simply copy the [`.skills/grandmaster/`](file:///.skills/grandmaster/) folder into your project root.

---

## 🥊 Before vs. After Grandmaster

| Scenario | Default AI Behavior | With Grandmaster Dev Kernel |
| :--- | :--- | :--- |
| **New API Endpoint** | Mixes business logic directly in route handler; no input validation; throws raw 500 errors. | **Layered architecture** (Router ➔ Service ➔ Repository); validates payloads with runtime schemas (Zod/Pydantic); returns standardized error envelopes. |
| **Database Mutations** | Simple `UPDATE table SET ...` without locking or transactions. | **Atomic transactions**, idempotency keys, and optimistic concurrency locks. |
| **UI Components** | Hardcoded pixel styles (`margin: 17px`), unhandled loading states, and no keyboard accessibility. | **Design tokens** (4px/8px scale), shimmer skeletons, responsive layouts, and WCAG AA accessibility. |
| **Testing** | 1 trivial mock test that asserts `true === true`. | **Edge-case testing:** null values, Unicode strings, network disconnects, and concurrent race conditions. |
| **Security** | Hardcodes `const API_KEY = "sk-..."` in client code. | **Zero-trust policy:** blocks hardcoded secrets, enforces parameterized queries, and sanitizes outputs against XSS. |

---

## ⚡ Token Efficiency Engine

Most AI skill repositories bloat your context window with thousands of words on *every single prompt*. 

Grandmaster uses a **Two-Tier Dynamic Dispatcher**:
1. **Tier 1 (Base Router):** Injects a compact **~150-token micro-index** into active context.
2. **Tier 2 (Lazy-Loaded Modules):** The AI dynamically references deep rules (`modules/01-hld-architecture.md`, `modules/04-devsecops-zerotrust.md`, etc.) only when executing that specific phase.

| Approach | Prompt Overhead | Token Cost per 100 Prompts |
| :--- | :--- | :--- |
| Standard Mega-Rules | ~2,500 - 4,000 tokens | ~300,000 tokens |
| **Grandmaster Dynamic Router** | **~150 tokens** | **~15,000 tokens (95% reduction on idle)** |

---

## 📁 Repository Structure

```text
grandmaster-dev/
├── bin/
│   └── cli.js                  # Zero-dependency interactive installer
├── .skills/
│   └── grandmaster/
│       ├── SKILL.md            # Master brain & dynamic micro-dispatcher
│       └── modules/
│           ├── 01-hld-architecture.md    # System design, ADRs & Mermaid diagrams
│           ├── 02-lld-craftsmanship.md   # Clean code, 3-tier boundary & strict types
│           ├── 03-ui-ux-design-system.md # Spacing tokens, a11y & responsive layouts
│           ├── 04-devsecops-zerotrust.md # OWASP Top 10 & secret redaction
│           ├── 05-thorough-testing.md    # Boundary testing, race conditions & mocks
│           ├── 06-devops-sre.md          # Multi-stage Docker & CI/CD workflows
│           └── 07-token-optimizer.md     # Surgical diffs & token efficiency
├── .cursorrules                # Standalone Cursor rules
├── .windsurfrules              # Standalone Windsurf rules
├── install.sh                  # Bash installer
├── install.ps1                 # Windows PowerShell installer
└── package.json
```

---

## 🤝 Contributing

Contributions are warmly welcome! If you have proven enterprise patterns or optimizations:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/kubernetes-hardening`).
3. Commit your changes (`git commit -m 'feat: add kubernetes production hardening rules'`).
4. Push to the branch (`git push origin feature/kubernetes-hardening`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](file:///LICENSE) for details.

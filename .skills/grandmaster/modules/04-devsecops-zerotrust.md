# Module 04: DevSecOps & Zero-Trust Security

Enforce military-grade defense in depth across all generated code, APIs, and infrastructure.

## 1. Zero-Trust Invariants
* **Never Trust the Client:** Client-side validation is purely for user experience; server-side validation is mandatory for security.
* **Prepared Statements & Parameterized Queries:** Never concatenate user input into SQL, NoSQL, ORM raw queries, or shell execution strings.
* **Principle of Least Privilege (PoLP):** Restrict database users, API tokens, and IAM roles to the minimum required actions.

## 2. OWASP Top 10 Prevention Matrix

| Vulnerability | Prevention Protocol |
| :--- | :--- |
| **SQL / NoSQL Injection** | Enforce parameterized queries, ORM query builders, and strictly typed input schemas. |
| **Broken Authentication** | Use secure HTTP-only, SameSite, Secure cookies or signed JWTs with short expirations and refresh token rotation. Hash passwords with Argon2id or bcrypt (cost factor >= 12). |
| **Broken Object Level Auth (BOLA / IDOR)** | Never trust client-supplied resource IDs blindly. Always verify ownership: `WHERE id = :resourceId AND user_id = :authenticatedUserId`. |
| **Cross-Site Scripting (XSS)** | Escape all dynamic outputs. Avoid `dangerouslySetInnerHTML` or `innerHTML`. Implement a strict Content-Security-Policy (CSP). |
| **Cross-Site Request Forgery (CSRF)** | Enforce SameSite cookie attributes and anti-CSRF tokens on state-changing endpoints. |
| **Server-Side Request Forgery (SSRF)** | Restrict outbound HTTP calls to a strict allowlist of domains/IPs. Reject private/internal IP ranges (`10.0.0.0/8`, `192.168.0.0/16`, `127.0.0.1`, `169.254.169.254`). |

## 3. Secret Shielding & AST Redaction
* Never hardcode API keys, tokens, private keys, or credentials into source code.
* Use environment variable loaders that validate at boot time (`process.env` with Zod or Pydantic `BaseSettings`). If a required environment variable is missing, fail startup immediately with a descriptive error.
* Ensure sensitive data (passwords, tokens, credit card numbers, PII) is stripped from application logs.

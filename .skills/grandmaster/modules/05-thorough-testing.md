# Module 05: Thorough Testing & Edge-Case Verification

Code without automated verification is technical debt. Enforce testing pyramids and edge-case resilience.

## 1. The Testing Pyramid
* **Unit Tests (70%):** Fast, isolated tests targeting pure functions, domain models, and business logic. Mock external network/database I/O.
* **Integration Tests (20%):** Test interactions between modules, real database transactions with test containers/in-memory SQLite, and API routes.
* **End-to-End Tests (10%):** Critical user journeys (Signup -> Checkout -> Receipt) using Playwright or Cypress.

## 2. Mandatory Edge-Case Checklist
When generating or reviewing tests, test beyond the happy path:
* **Boundary Values:** Zero, negative values, empty arrays/strings, maximum integer/float limits, gigantic payload strings.
* **Special Characters & Unicode:** Emojis, RTL characters, null bytes (`\0`), whitespace-only strings, SQL injection probes (`' OR 1=1 --`).
* **Concurrency & Race Conditions:** Multiple simultaneous requests mutating the exact same resource. Verify row-locking (`SELECT FOR UPDATE`), optimistic locking (`version` column), or distributed locks.
* **Failure Modes:** Simulated database downtime, third-party timeout (504), network disconnects, rate-limit triggers (429).

## 3. Test Quality Standards
* Use clear, descriptive test names following the `Given / When / Then` pattern:
  ```typescript
  describe("UserService.create()", () => {
    it("should throw DuplicateEmailError when an existing user email is supplied", async () => {
      // Arrange
      const payload = { email: "existing@example.com", name: "Alice" };
      // Act & Assert
      await expect(service.create(payload)).rejects.toThrow(DuplicateEmailError);
    });
  });
  ```
* Ensure tests are deterministic and independent. Tests must not depend on the execution order of other tests.

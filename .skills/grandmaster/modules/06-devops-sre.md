# Module 06: DevOps, SRE & Observability

Ensure the system is easily containerized, deployable, observable, and resilient in production environments.

## 1. Production Docker Standards
* **Multi-Stage Builds:** Always separate the build environment from the minimal runtime image (e.g., `node:22-alpine` or `gcr.io/distroless/nodejs`).
* **Non-Root Execution:** Never run production containers as `root`. Always create and switch to a dedicated unprivileged user (`USER node` or `USER appuser`).
* **Deterministic Package Installs:** Use `npm ci`, `poetry install --no-dev`, or `pip install --frozen-requirement` to avoid unexpected dependency drift.
* **Health Checks:** Every service must expose a lightweight `/healthz` or `/livez` endpoint that verifies process readiness.

## 2. CI/CD GitHub Actions Invariants
Every workflow must enforce automated quality gates:
1. Linting & Formatting check (`prettier`, `eslint`, `black`, `golangci-lint`).
2. Type checking (`tsc --noEmit` or `mypy`).
3. Automated test execution with code coverage reporting.
4. Security vulnerability scan (`npm audit`, `trivy`, or `snyk`).

## 3. Observability (Logs, Metrics, Traces)
* **Structured Logging:** Output all application logs in structured JSON format (`timestamp`, `level`, `trace_id`, `message`, `context`). Never use raw `console.log` strings in production code.
* **Correlation IDs:** Propagate `x-request-id` or `traceparent` headers through every downstream service call and database query.
* **Graceful Shutdown:** Handle `SIGTERM` and `SIGINT` signals cleanly: close active HTTP connections, flush logs, and release database pools before process termination.

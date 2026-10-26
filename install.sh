#!/usr/bin/env bash
set -e

# Grandmaster Dev Kernel Installer (macOS/Linux/WSL)
echo "⚡ Installing Grandmaster Dev Kernel..."

REPO_URL="https://raw.githubusercontent.com/your-username/grandmaster-dev/main"

# Create directories
mkdir -p .skills/grandmaster/modules
mkdir -p .cursor/rules

# Download Core SKILL.md
curl -sSL "$REPO_URL/.skills/grandmaster/SKILL.md" -o .skills/grandmaster/SKILL.md

# Download Modules
for module in 01-hld-architecture 02-lld-craftsmanship 03-ui-ux-design-system 04-devsecops-zerotrust 05-thorough-testing 06-devops-sre 07-token-optimizer; do
  curl -sSL "$REPO_URL/.skills/grandmaster/modules/${module}.md" -o ".skills/grandmaster/modules/${module}.md"
done

# Download Cursor & Windsurf rules
curl -sSL "$REPO_URL/.cursorrules" -o .cursorrules
curl -sSL "$REPO_URL/.windsurfrules" -o .windsurfrules

# Create Cursor MDC rule
cat << 'EOF' > .cursor/rules/grandmaster.mdc
---
description: Grandmaster Dev Kernel - 40-Year Veteran Staff Architect & DevSecOps Rules
globs: *
alwaysApply: true
---
EOF
cat .cursorrules >> .cursor/rules/grandmaster.mdc

# Create CLAUDE.md if not exists
if [ ! -f CLAUDE.md ]; then
  cat << 'EOF' > CLAUDE.md
# Grandmaster Engineering Instructions
This project is governed by the Grandmaster Dev Kernel (.skills/grandmaster/SKILL.md).
Before executing any code changes, system design, or API modifications, consult the active invariants in .skills/grandmaster/SKILL.md.
EOF
fi

echo "✔ Grandmaster Dev Kernel installed successfully!"
echo "Your AI assistant is now augmented with 40-year veteran engineering standards."

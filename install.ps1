# Grandmaster Dev Kernel Installer for Windows PowerShell
$ErrorActionPreference = "Stop"

Write-Host "⚡ Installing Grandmaster Dev Kernel..." -ForegroundColor Cyan

$REPO_URL = "https://raw.githubusercontent.com/raviattrash-pro/grandmaster-dev/main"

# Create directories
New-Item -ItemType Directory -Force -Path ".skills\grandmaster\modules" | Out-Null
New-Item -ItemType Directory -Force -Path ".cursor\rules" | Out-Null

# Download Core SKILL.md
Invoke-RestMethod -Uri "$REPO_URL/.skills/grandmaster/SKILL.md" -OutFile ".skills\grandmaster\SKILL.md"

# Download Modules
$modules = @(
    "01-hld-architecture",
    "02-lld-craftsmanship",
    "03-ui-ux-design-system",
    "04-devsecops-zerotrust",
    "05-thorough-testing",
    "06-devops-sre",
    "07-token-optimizer",
    "08-rea-reverse-engineer",
    "09-pwa-offline-engine",
    "10-adaptive-responsive-ui",
    "11-feature-flags-canary",
    "12-smooth-loading-perf",
    "13-rate-limiting-circuit-breaker"
)

foreach ($mod in $modules) {
    Invoke-RestMethod -Uri "$REPO_URL/.skills/grandmaster/modules/$mod.md" -OutFile ".skills\grandmaster\modules\$mod.md"
}

# Download Cursor & Windsurf rules
Invoke-RestMethod -Uri "$REPO_URL/.cursorrules" -OutFile ".cursorrules"
Invoke-RestMethod -Uri "$REPO_URL/.windsurfrules" -OutFile ".windsurfrules"

# Create Cursor MDC rule
$mdcHeader = @"
---
description: Grandmaster Dev Kernel - 40-Year Veteran Staff Architect & DevSecOps Rules
globs: *
alwaysApply: true
---
"@
$cursorContent = Get-Content ".cursorrules" -Raw
Set-Content -Path ".cursor\rules\grandmaster.mdc" -Value ($mdcHeader + "`n" + $cursorContent)

# Create CLAUDE.md if not exists
if (-not (Test-Path "CLAUDE.md")) {
    $claudeContent = @"
# Grandmaster Engineering Instructions
This project is governed by the Grandmaster Dev Kernel (.skills/grandmaster/SKILL.md).
Before executing any code changes, system design, or API modifications, consult the active invariants in .skills/grandmaster/SKILL.md.
"@
    Set-Content -Path "CLAUDE.md" -Value $claudeContent
}

Write-Host "✔ Grandmaster Dev Kernel installed successfully!" -ForegroundColor Green
Write-Host "Your AI assistant is now augmented with 40-year veteran engineering standards." -ForegroundColor Yellow

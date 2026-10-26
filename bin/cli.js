#!/usr/bin/env node

/**
 * Grandmaster Dev CLI
 * The 40-Year Veteran Staff Architect & DevSecOps Kernel
 * Installs skills and rules for Cursor, Claude Code, Antigravity, and Windsurf.
 */

const fs = require('fs');
const path = require('path');

const BANNER = `
\x1b[36m   ██████╗ ██████╗  █████╗ ███╗   ██╗██████╗ ███╗   ███╗ █████╗ ███████╗████████╗███████╗██████╗ 
  ██╔════╝ ██╔══██╗██╔══██╗████╗  ██║██╔══██╗████╗ ████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
  ██║  ███╗██████╔╝███████║██╔██╗ ██║██║  ██║██╔████╔██║███████║███████╗   ██║   █████╗  ██████╔╝
  ██║   ██║██╔══██╗██╔══██║██║╚██╗██║██║  ██║██║╚██╔╝██║██╔══██║╚════██║   ██║   ██╔══╝  ██╔══██╗
  ╚██████╔╝██║  ██║██║  ██║██║ ╚████║██████╔╝██║ ╚═╝ ██║██║  ██║███████║   ██║   ███████╗██║  ██║
   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝\x1b[0m
  \x1b[33m⚡ 40-Year Veteran Staff Architect, Principal Full-Stack Engineer & DevSecOps Kernel\x1b[0m
`;

function logSuccess(msg) {
  console.log(`\x1b[32m✔\x1b[0m ${msg}`);
}

function logInfo(msg) {
  console.log(`\x1b[34mℹ\x1b[0m ${msg}`);
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function install() {
  console.log(BANNER);
  console.log('\x1b[1mDetecting AI Code Tools and Installing Grandmaster Kernel...\x1b[0m\n');

  const cwd = process.cwd();
  const packageRoot = path.resolve(__dirname, '..');
  const sourceSkillsDir = path.join(packageRoot, '.skills', 'grandmaster');

  let installedCount = 0;

  // 1. Install .skills/grandmaster (Claude Code & Antigravity)
  const targetSkillsDir = path.join(cwd, '.skills', 'grandmaster');
  try {
    copyDirectory(sourceSkillsDir, targetSkillsDir);
    logSuccess('Installed Grandmaster Skill Pack for Antigravity & Claude Code (.skills/grandmaster)');
    installedCount++;
  } catch (err) {
    console.error(`\x1b[31m✖ Failed to install .skills: ${err.message}\x1b[0m`);
  }

  // 2. Install .cursorrules & .cursor/rules/grandmaster.mdc
  const sourceCursorrules = path.join(packageRoot, '.cursorrules');
  const targetCursorrules = path.join(cwd, '.cursorrules');
  try {
    if (fs.existsSync(sourceCursorrules)) {
      fs.copyFileSync(sourceCursorrules, targetCursorrules);
      logSuccess('Installed Grandmaster rules for Cursor (.cursorrules)');
      installedCount++;
    }

    const cursorRulesDir = path.join(cwd, '.cursor', 'rules');
    if (!fs.existsSync(cursorRulesDir)) {
      fs.mkdirSync(cursorRulesDir, { recursive: true });
    }
    const targetMdc = path.join(cursorRulesDir, 'grandmaster.mdc');
    const mdcContent = `---
description: Grandmaster Dev Kernel - 40-Year Veteran Staff Architect & DevSecOps Rules
globs: *
alwaysApply: true
---
${fs.readFileSync(sourceCursorrules, 'utf8')}
`;
    fs.writeFileSync(targetMdc, mdcContent, 'utf8');
    logSuccess('Installed Cursor MDC Rule (.cursor/rules/grandmaster.mdc)');
  } catch (err) {
    console.error(`\x1b[31m✖ Failed to install Cursor rules: ${err.message}\x1b[0m`);
  }

  // 3. Install .windsurfrules
  const sourceWindsurf = path.join(packageRoot, '.windsurfrules');
  const targetWindsurf = path.join(cwd, '.windsurfrules');
  try {
    if (fs.existsSync(sourceWindsurf)) {
      fs.copyFileSync(sourceWindsurf, targetWindsurf);
      logSuccess('Installed Grandmaster rules for Windsurf (.windsurfrules)');
      installedCount++;
    }
  } catch (err) {
    console.error(`\x1b[31m✖ Failed to install Windsurf rules: ${err.message}\x1b[0m`);
  }

  // 4. Install CLAUDE.md reference
  const targetClaudeMd = path.join(cwd, 'CLAUDE.md');
  const claudeContent = `# Grandmaster Engineering Instructions
This project is governed by the Grandmaster Dev Kernel (.skills/grandmaster/SKILL.md).
Before executing any code changes, system design, or API modifications, consult the active invariants in .skills/grandmaster/SKILL.md.
`;
  try {
    if (!fs.existsSync(targetClaudeMd)) {
      fs.writeFileSync(targetClaudeMd, claudeContent, 'utf8');
      logSuccess('Configured Claude Code Entrypoint (CLAUDE.md)');
    } else {
      logInfo('CLAUDE.md already exists; preserved existing configuration.');
    }
  } catch (err) {
    console.error(`\x1b[31m✖ Failed to configure CLAUDE.md: ${err.message}\x1b[0m`);
  }

  console.log(`
\x1b[32m=====================================================================\x1b[0m
\x1b[1;32m Grandmaster Kernel Successfully Activated! \x1b[0m
\x1b[32m=====================================================================\x1b[0m

  \x1b[33mPillars Active:\x1b[0m
   1. \x1b[1mHLD & Architecture\x1b[0m       (Resilience, ADRs, Living Mermaid Diagrams)
   2. \x1b[1mLLD & Craftsmanship\x1b[0m      (Layered boundaries, strict types, Zod/Pydantic)
   3. \x1b[1mUI/UX Design Systems\x1b[0m     (Spacing tokens, WCAG AA, shimmer skeletons)
   4. \x1b[1mZero-Trust Security\x1b[0m      (OWASP Top 10 shields, secret redaction)
   5. \x1b[1mThorough Testing\x1b[0m         (Edge-cases, race condition checks, pyramid)
   6. \x1b[1mDevOps & SRE\x1b[0m             (Multi-stage Docker, health checks, CI/CD)
   7. \x1b[1mToken-Budget Engine\x1b[0m      (Micro-router saves ~70% token context)

  \x1b[36mTip:\x1b[0m Your AI assistant will now automatically apply Senior Architect
  standards to any prompt in this repository!
`);
}

const args = process.argv.slice(2);
const command = args[0] || 'init';

if (command === 'init' || command === 'install') {
  install();
} else if (command === '--help' || command === '-h') {
  console.log(BANNER);
  console.log(`Usage: npx grandmaster-dev [command]

Commands:
  init       Initialize Grandmaster Dev Kernel in current project (default)
  install    Alias for init

Flags:
  --help     Show help
`);
} else {
  console.log(`Unknown command: ${command}. Run "npx grandmaster-dev --help" for options.`);
}

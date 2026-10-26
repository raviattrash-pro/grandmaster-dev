const { describe, it } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('Grandmaster Dev Kernel Automated Test Suite', () => {
  const rootDir = path.resolve(__dirname, '..');
  const tempSandbox = path.join(rootDir, '.test-tmp-sandbox');

  it('should have valid package.json configuration', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
    assert.strictEqual(pkg.name, 'grandmaster-dev');
    assert.ok(pkg.bin && pkg.bin['grandmaster-dev'], 'bin executable must be configured');
    assert.ok(fs.existsSync(path.join(rootDir, pkg.bin['grandmaster-dev'])), 'cli.js must exist on disk');
  });

  it('should have all 13 core modules present in source repository', () => {
    const modulesDir = path.join(rootDir, '.skills', 'grandmaster', 'modules');
    assert.ok(fs.existsSync(modulesDir), 'modules directory must exist');

    const expectedModules = [
      '01-hld-architecture.md',
      '02-lld-craftsmanship.md',
      '03-ui-ux-design-system.md',
      '04-devsecops-zerotrust.md',
      '05-thorough-testing.md',
      '06-devops-sre.md',
      '07-token-optimizer.md',
      '08-rea-reverse-engineer.md',
      '09-pwa-offline-engine.md',
      '10-adaptive-responsive-ui.md',
      '11-feature-flags-canary.md',
      '12-smooth-loading-perf.md',
      '13-rate-limiting-circuit-breaker.md'
    ];

    for (const mod of expectedModules) {
      const modPath = path.join(modulesDir, mod);
      assert.ok(fs.existsSync(modPath), `Module ${mod} must exist`);
      const content = fs.readFileSync(modPath, 'utf8');
      assert.ok(content.length > 500, `Module ${mod} must have substantive content`);
    }
  });

  it('should have all media assets present', () => {
    const assetsDir = path.join(rootDir, 'assets');
    const expectedAssets = [
      'hero-banner.svg',
      'architecture-dispatcher.svg',
      'feature-matrix.svg',
      'before-after-card.svg',
      'social-card.png'
    ];

    for (const asset of expectedAssets) {
      const assetPath = path.join(assetsDir, asset);
      assert.ok(fs.existsSync(assetPath), `Asset ${asset} must exist in assets/`);
    }
  });

  it('should execute CLI and install full suite into a clean sandbox directory', () => {
    if (fs.existsSync(tempSandbox)) {
      fs.rmSync(tempSandbox, { recursive: true, force: true });
    }
    fs.mkdirSync(tempSandbox, { recursive: true });

    const cliPath = path.join(rootDir, 'bin', 'cli.js');
    execSync(`node "${cliPath}" init`, { cwd: tempSandbox, stdio: 'pipe' });

    // Verify sandbox installations
    assert.ok(fs.existsSync(path.join(tempSandbox, '.skills', 'grandmaster', 'SKILL.md')));
    assert.ok(fs.existsSync(path.join(tempSandbox, '.cursorrules')));
    assert.ok(fs.existsSync(path.join(tempSandbox, '.windsurfrules')));
    assert.ok(fs.existsSync(path.join(tempSandbox, 'CLAUDE.md')));
    assert.ok(fs.existsSync(path.join(tempSandbox, '.cursor', 'rules', 'grandmaster.mdc')));

    // Cleanup
    fs.rmSync(tempSandbox, { recursive: true, force: true });
  });
});

import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'tests/UI_Tests/**/*.feature',
  steps: 'tests/UI_Tests/steps/**/*.ts',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});

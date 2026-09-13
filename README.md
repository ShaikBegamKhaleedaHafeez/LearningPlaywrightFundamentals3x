# Learning Playwright Fundamentals 3x

A hands-on learning repository for **Playwright** with **TypeScript**. It contains progressive examples covering the browser/context/page model, test runner basics, test annotations, and locator commands used in end-to-end testing.

## Tech Stack

- [Playwright](https://playwright.dev/) `^1.63.0` (`@playwright/test`, `playwright`, `playwright-core`)
- TypeScript `^6.0.3`
- Node.js with `ts-node`

## Project Structure

```
tests/
├── 01_Basics/
│   ├── 216_example.spec.ts        # Simple tests: title assertions
│   ├── 217_multiple_context.ts    # Multiple browser contexts (multi-user)
│   ├── 218_normal_pw.ts           # Raw Playwright: browser -> context -> page
│   ├── 219_tta_check.spec.ts      # Login flow using role-based locators
│   ├── 220_BCP.spec.ts            # Browser / Context / Page lifecycle
│   ├── 221_TA.spec.ts             # Multiple contexts for admin/user roles
│   └── 222_TestOptions.spec.ts    # Context options: viewport, locale, geolocation, mobile
├── 02_TestAnnotations/
│   ├── 223_TestAnnotations.spec.ts  # skip, only, fail, fixme, slow
│   └── 224_TestDescribe.spec.ts     # Grouping tests with test.describe
└── 03_Locator_Commands/
    └── 225_Locators.spec.ts         # Locator commands and element filtering
```

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific file:

```bash
npx playwright test tests/01_Basics/216_example.spec.ts
```

Run in headed mode (configured as default in `playwright.config.ts`):

```bash
npx playwright test --headed
```

Run a single project/browser:

```bash
npx playwright test --project=chromium
```

View the HTML report after a run:

```bash
npx playwright show-report
```

## Configuration

`playwright.config.ts` highlights:

- `testDir: './tests'`
- Parallel execution enabled (`fullyParallel: true`)
- HTML reporter
- Three browser projects: Chromium, Firefox, WebKit
- `headless: false` (tests run in a visible browser by default)
- Global `timeout: 60000`
- Retries only on CI

## Notes

- Some examples use public practice sites such as `app.thetestingacademy.com`, `sdet.live`, `app.vwo.com`, `example.com`, and `playwright.dev`.
- Tests annotate expected failures, skips, and fixes directly (`test.skip`, `test.only`, `test.fail`, `test.fixme`, `test.slow`).

## License

MIT

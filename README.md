# TS Starter pack

A small template for a TypeScript app with Jest, ESLint + Prettier, Husky, and Github Actions.

## Requirements:

- `node.js@22`

## Setup

- `npm i`

### NPM Scripts

- `npm run build` - compiles a project into the `dist/` folder.
- `npm run start` - runs `main.ts` file with `ts-node`.
- `npm run dev` - runs a dev server.
- `npm run test` - runs tests with Jest.
- `npm run test:ci` - runs tests, generates coverage report.
- `npm run test:watch` - runs tests in watch mode.
- `npm run lint` - checks files with ESLint + Prettier.
- `npm run lint:fix` - fixes ESLint + Prettier issues.

### GitHub Actions

In order to support proper `package.json` version increase + tag creation,
you need to generate an SSH key for a GitHub Action runner.

#### Steps:

- Generate SSH keys with `ssh-keygen -t ed25519 -C "github-actions" -f github_actions`;
- Go to Repository `Settings` -> `Security` -> `Deploy Keys` and add a `github_action.pub` key;
- Next, Go to Repository `Settings` -> `Security` -> `Secrets and Variables` -> `Actions` and add a private key
  `github_action` in `Environment secrets` as `SSH_PRIVATE_KEY`;

# TypeScript — ESLint setup

This repo contains small TypeScript and JavaScript example files. ESLint is set up to lint both `.ts` and `.js` files.

## Quick commands

```bash
# install dependencies
npm install

# run linter
npm run lint

# automatically fix fixable issues
npm run lint:fix

# run tslint (alias for lint)
npm run tslint
```

## Notes

- ESLint config lives in `.eslintrc.json` and a list of files/folders excluded from linting is in `.eslintignore`.
- A `.gitignore` was added to exclude node_modules, build outputs and other transient files.
- You may see a warning about TypeScript compatibility with @typescript-eslint. If you run into parser / rule issues, either update `@typescript-eslint/*` to a version that supports your TypeScript version, or install a TypeScript version compatible with the currently installed parser plugin.

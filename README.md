# Understanding TypeScript

A TypeScript learning project with ESLint configuration for code quality and consistency.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

## Linting

This project uses **ESLint with Airbnb style guide** and TypeScript support to maintain code quality and consistency.

### Linting Configuration

The project uses the following ESLint configuration:

- **Parser**: `@typescript-eslint/parser` - Parses TypeScript code with project-aware type checking
- **Base Config**: `airbnb-base` and `airbnb-typescript/base` - Airbnb's JavaScript and TypeScript style guide
- **Environment**: Browser and ES2020
- **Source Type**: ES6 modules

### Running Linter

To check your code for linting errors:

```bash
npm run lint
```

Or use the alternative command:

```bash
npm run tslint
```

Both commands will check all TypeScript files in the `src/` directory.

### ESLint Rules

The project has the following custom rules configured in `.eslintrc.json`:

- `import/prefer-default-export`: **off** - Allows named exports without requiring default exports
- `no-console`: **off** - Allows console statements (useful for debugging and learning)

### Linting Setup Details

**Configuration File**: `.eslintrc.json`

**Key Features**:
- TypeScript parser with project-aware linting (uses `tsconfig.json`)
- **Airbnb style guide** for consistent code style across the project
- Browser and ES2020 environment support
- ES6 module support

**Dependencies**:
- `eslint` (^8.57.1) - Core linting tool
- `@typescript-eslint/eslint-plugin` (^7.18.0) - TypeScript-specific linting rules
- `@typescript-eslint/parser` (^7.18.0) - TypeScript parser for ESLint
- `eslint-config-airbnb-base` (^15.0.0) - Airbnb base JavaScript style guide
- `eslint-config-airbnb-typescript` (^18.0.0) - Airbnb TypeScript style guide
- `eslint-plugin-import` (^2.32.0) - Import/export linting rules

### Airbnb Style Guide

This project follows the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and [Airbnb TypeScript Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-typescript) for:

- Code formatting and style consistency
- Best practices and conventions
- Import/export organization
- TypeScript-specific patterns

### Fixing Linting Issues

To automatically fix some linting issues:

```bash
npm run lint -- --fix
```

Note: Not all issues can be automatically fixed. Some may require manual intervention.

## Project Structure

```
src/
  ├── app.ts              # Main application entry point
  ├── components/         # Reusable components
  │   ├── base-component.ts
  │   ├── project-input.ts
  │   ├── project-item.ts
  │   └── project-list.ts
  ├── models.ts           # Data models
  ├── state.ts            # Application state management
  └── util.ts             # Utility functions
```

## TypeScript Configuration

The project uses strict TypeScript settings:
- Strict mode enabled
- No unused locals or parameters
- No implicit returns
- Source maps enabled
- Experimental decorators enabled

## License

ISC

## Author

Maximilian Schwarzmüller

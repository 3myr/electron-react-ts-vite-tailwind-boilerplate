# Electron React TS Vite Tailwind Boilerplate

This project is a **boilerplate** for creating desktop applications using **Electron**, **React**, and **TypeScript**. It leverages **Vite** for fast bundling, **Tailwind CSS** for styling, and **ESLint** to maintain code quality.

---

## Features

- **Electron**: Build cross-platform desktop applications.
- **React & TypeScript**: Develop robust, strongly-typed user interfaces.
- **Vite**: Super-fast development server and bundler.
- **Tailwind CSS**: Utility-first CSS framework for modern, responsive design.
- **ESLint**: Enforces clean and consistent code.

---

## Requirements

- **Node.js** (version 20 or higher)
---

## Installation

**For Enterprise environment:**

If you have any issue with company certificate (ex: ZScaler), disable TLS before doing an npm install using :

`$env:NODE_TLS_REJECT_UNAUTHORIZED="0"`

After installation, reset the parameter using :

`$env:NODE_TLS_REJECT_UNAUTHORIZED="1"`


**Install dependencies:**

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

---

## Usage

### Development Mode

Start the web application in development mode (with hot reloading):

```bash
npm run dev
```

Start the complete application in development mode (with hot reloading):

```bash
npm run electron:dev
```

This command launches the **Vite** development server for the renderer process and opens the Electron window.

### Build for Production

Generate optimized files for production:

```bash
npm run build
```

### Packaging

If you use a packaging tool (e.g., Electron Builder), run:

```bash
npm run dist
```

### Linting

Check your code with ESLint:

```bash
npm run lint
```

To automatically fix some of the detected issues (when possible):

```bash
npm run lint -- --fix
```

---

## Project Structure

Below is an overview of the folders and files in this boilerplate:

```plaintext
.
├── main/
│   ├── lib/
│   ├── index.ts
│   ├── preload.ts
│   └── tsconfig.json
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── header/
│   │       ├── Header.tsx
│   │       └── Header.scss
│   ├── containers/
│   │   └── app/
│   │       ├── App.tsx
│   │       └── App.scss
│   ├── hooks/
│   ├── lib/
│   ├── model/
│   ├── electron.d.ts
│   ├── index.css
│   ├── vite-env.d.ts
│   └── main.tsx
├── .env.example
├── .gitignore
├── bun.lockb
├── electron-builder.config.js
├── esbuild.config.mjs
├── eslint.config.js
├── package.json
├── postcss.config.cjs
├── tailwind.config.js
├── index.html
├── readme.md
├── package.json
├── tsconfig.json
├── tsconfig.renderer.json
├── tsconfig.vite.json
└── vite.config.ts
```

- **main/**: Contains Electron’s main process code (`index.ts`, `preload.ts`, etc.).
- **src/**: Contains React and TypeScript code for the renderer process.
- **public/**: Static files to be served directly.
- **.env.example**: Example environment variables.
- **electron-builder.config.js**: Configuration for packaging your app (if using Electron Builder).
- **esbuild.config.mjs**, **eslint.config.js**, **postcss.config.cjs**, **vite.config.ts**, **tsconfig.json**, **tsconfig.renderer.json**, **tsconfig.vite.json**: Various configuration files.
- **package.json**: Scripts and dependencies.
- **readme.md**: This file.

---

## ESLint Configuration

This project includes an **ESLint** configuration to keep your code consistent and to prevent common errors. You can modify the rules in `eslint.config.js` according to your needs.

---

## Contributing

Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.

---

## License

This project is distributed under the [MIT License](./LICENSE).

---

Enjoy building your Electron + React application!

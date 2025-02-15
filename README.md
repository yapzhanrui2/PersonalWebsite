# Personal Website

This repository contains the source code for my personal website, developed using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). The site is live at [https://zhanrui-yap.netlify.app/](https://zhanrui-yap.netlify.app/).

## Features

- **Fast Development**: Utilizes Vite's Hot Module Replacement (HMR) for rapid development cycles.
- **Linting**: Integrated with ESLint to maintain code quality and consistency.
- **Deployment**: Seamlessly deployed on [Netlify](https://www.netlify.com/).

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yapzhanrui2/PersonalWebsite.git
   cd PersonalWebsite
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The site should now be running locally at `http://localhost:5173/`.

## Available Scripts

- `npm run dev`: Starts the development server with HMR.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to analyze code for potential errors.

## ESLint Configuration

This project includes a custom ESLint configuration to enforce code standards. To expand the ESLint configuration for production applications, consider enabling type-aware linting rules:

1. **Configure the `parserOptions`**:

   ```javascript
   // eslint.config.js
   export default {
     parserOptions: {
       project: ['./tsconfig.json'],
       tsconfigRootDir: __dirname,
     },
   };
   ```

2. **Extend recommended rules**:

   Replace `'plugin:@typescript-eslint/recommended'` with `'plugin:@typescript-eslint/recommended-type-checked'` or `'plugin:@typescript-eslint/strict-type-checked'` in your ESLint configuration.

3. **Install additional plugins**:

   ```bash
   npm install eslint-plugin-react --save-dev
   ```

   Update the ESLint config to include the React plugin:

   ```javascript
   // eslint.config.js
   import react from 'eslint-plugin-react';

   export default {
     plugins: {
       react,
     },
     rules: {
       ...react.configs.recommended.rules,
       ...react.configs['jsx-runtime'].rules,
     },
   };
   ```

For more details, refer to the [Vite Plugin React SWC documentation](https://github.com/vitejs/vite-plugin-react-swc).

## Deployment

The website is automatically deployed to Netlify upon each commit to the main branch. To deploy your own version:

1. **Create a Netlify account**: [Sign up here](https://app.netlify.com/signup).
2. **Connect your repository**: Link this GitHub repository to your Netlify account.
3. **Set up build settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

Netlify will handle the continuous deployment, ensuring that any changes pushed to the main branch are reflected on the live site.



# REACT PRACTICE ONE

## Description:

- Getting started with react hooks and Storybook

## Targets:

- Apply Storybook into practice
- Apply learned hooks: useState, useContext, useEffect
- Apply mockAPI into practice

## Features:

- Render UI
- Call API (menu)
- Show menu
- Load more menu
- Add to cart
- Remove from cart
- Form validation

## Design on figma:

[Figma](<https://www.figma.com/file/f4UERtJo8ZKzQTsSQ6BX3Z/Restaurant-Website-(Shop)-(Community)?node-id=7%3A23&mode=dev>)

## Requirments:

[Link](https://docs.google.com/document/d/16mqK44TYwOQ_CTbO6kFt70ak-5gIFesOBs9JdFJytyw/edit)

## Deploy:

- App: [Here](https://practice-one-eight.vercel.app/)
- Storybook: [Here](https://practice-react-sepia.vercel.app/?path=/story/components-footer--default)

## Information:

- Time line: 09/10/2023 -> 16/10/2023
- Editor: Visual Studio Code
- Supported browser: Chrome lasted

## Environments:

- Node: v18.16.0
- Vite: Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## Folder structure

practice-one

```
|-- src
    |-- assets
        |-- font
        |-- image
    |-- components
        |-- common
            |-- Button
            |-- Card
            |-- Heading
            |-- Image
            |-- Input
            |-- Label
            |-- Navbar
            |-- index
        |-- Footer
        |-- FormCheckout
        |-- ListCart
        |-- ListProduct
        |-- index
    |-- constants
        |-- base-url
        |-- error
        |-- nav-link
        |-- regex
    |-- helper
        |-- data-localStorage
        |-- vaildation
    |-- layout
        |-- MainLayout
    |-- pages
        |-- Cart
        |-- Checkout
        |-- Home
        |-- Menu
        |-- index
    |-- routers
        |-- index
    |-- types
        |-- interface
    |-- App.tsx
    |-- main.tsx
    |-- index.css
    |-- App.css
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- README.md
|-- vite.config.ts
```

## Getting started:

- Step 01: Clone repository with HTTPS:

```
git clone https://github.com/taile0310/practice_react.git
```

- Step 02: Change to branch feature/practice-one:

```
git checkout feature/practice-one
```

- Step 03: Move to practice-one/src folder which just cloned in your computer:

```
cd practice-one/src
```

- Step 04: Install packages:

```
pnpm install
```

- Step 05: Finally run with:

```
pnpm dev
```

- Step 06: Open browser:

```
Open http://localhost:5173/ in browser.
```

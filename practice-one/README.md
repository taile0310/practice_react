# REACT PRACTICE ONE

## Description:

- Getting started with react hooks and Storybook

## Targets:

- Apply SWR into practice.
- Apply learned hooks: useState, useContext, useEffect, useReducer, useMemo, useCallback, memo.
- Apply lazy and suspense
- Apply custom hooks.
- Apply Error boundary.
- Apply mockAPI into practice.
- Apply unit testing basic with jest and testing-library/react

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

- App: [Here](https://practice-two-tau.vercel.app/)
- Storybook: [Here](https://practice-react-sepia.vercel.app/?path=/story/components-image--image-rectangle)

## Information:

- Time line: 06/11/2023 -> 16/11/2023
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
            |-- Error
            |-- Loading
            |-- index
        |-- Footer
        |-- FormCheckout
        |-- ListCart
        |-- ListProduct
        |-- ErrorBoundary
        |-- index
    |-- constants
        |-- BaseUrl
        |-- Error
        |-- NavLink
        |-- Regex
    |-- helper
        |-- __test__
            |-- CalculatorTotalPrice.test
            |-- DataLocalStorage.test
            |-- FetchData.test
            |-- Vaildation.test
        |-- DataLocalStorage
        |-- CalculatorTotalPrice
        |-- FontSize
        |-- Vaildation
        |-- FetchData
        |-- Delay
    |-- layout
        |-- MainLayout
    |-- hooks
        |-- __test__
            |-- UseFetch.test
            |-- UseForm.test
        |-- useFetch
        |-- useForm
    |-- pages
        |-- Cart
        |-- Checkout
        |-- Home
        |-- Menu
        |-- index
    |-- routers
        |-- index
    |-- types
        |-- TAction
        |-- TButton
        |-- THeading
        |-- TProduct
        |-- TVariant
    |-- stores
        |-- contexts
            |-- CartContext
        |-- reducers
            |-- action
                |-- index
            |-- index
    |-- App.tsx
    |-- main.tsx
    |-- index.css
    |-- App.css
|-- .eslintrc.cjs
|-- .gitignore
|-- index.html
|-- jest.config.ts
|-- package-lock.json
|-- package.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- README.md
|-- vercel.json
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

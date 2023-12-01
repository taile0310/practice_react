# REACT PRACTICE TWO

## Description:

- Continue to implement advanced practice one and write tests for practice two. Also use libraries like SWR and Zustand.

## Targets:

- Apply SWR into practice.
- Apply learned hooks: useState, useContext, useEffect, useReducer, useMemo, useCallback, memo.
- Apply lazy and suspense
- Apply custom hooks.
- Apply Error boundary.
- Apply mockAPI into practice.
- Apply unit testing basic with jest and testing-library/react
- Apply Zustand

## Features:

- Render UI
- Call API (menu)
- Show menu
- Load more menu
- Add to cart
- Remove from cart
- Form validation
- Create new products
- Delete products
- Update products
- Write tests for components and helper

## Design on figma:

[Figma](<https://www.figma.com/file/f4UERtJo8ZKzQTsSQ6BX3Z/Restaurant-Website-(Shop)-(Community)?node-id=7%3A23&mode=dev>)

## Requirement:

[Link](https://docs.google.com/document/d/16mqK44TYwOQ_CTbO6kFt70ak-5gIFesOBs9JdFJytyw/edit)

## Deploy:

- App: [Here](https://practice-two-tau.vercel.app/)
- Storybook: [Here](https://practice-react-sepia.vercel.app/?path=/story/components-image--image-rectangle)

## Information:

- Time line: 06/11/2023 -> 27/11/2023
- Editor: Visual Studio Code
- Supported browser: Chrome lasted

## Environments:

- Node: v18.16.0
- Vite: Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## Folder structure

practice-one

```
|-- src
    |-- APIService
    |-- assets
        |-- font
        |-- image
    |-- components
        |-- Alert
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
        |-- Confirm
        |-- Footer
        |-- FormCheckout
        |-- ListCart
        |-- ListProduct
        |-- ErrorBoundary
        |-- Modal
        |-- MainLayout
        |-- index
    |-- constants
        |-- BaseUrl
        |-- Error
        |-- NavLink
        |-- Regex
        |-- index
    |-- helper
        |-- DataLocalStorage
        |-- CalculatorTotalPrice
        |-- FontSize
        |-- Vaildation
        |-- FetchData
        |-- index
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
        |-- TProduct
        |-- Toggle
        |-- TVariant
        |-- index
    |-- stores
        |-- index
        |-- AlertStore
        |-- CartStore
        |-- ProductStore
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

- Step 02: Change to branch feature/practice-two:

```
git checkout feature/practice-two
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

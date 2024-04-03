# Challenge for Developers

This repository contains a web application built with React, TypeScript, Styled-components, GraphQL, Apollo Client, Github Actions and Github Pages hosting, designed to allow users to search for and view information about characters from the "Rick and Morty" series using the [Rick and Morty API](https://rickandmortyapi.com/documentation/#graphql).

## Applicant Name

Thayrov García Tovar

## Live Demo

[Rick and Morty Page](https://thayrov.github.io/kimche-challenge/)

## Project Structure

Below is the folder structure of the project:

📁 challenge-dev
├── .eslintrc.cjs
├── .gitignore
├── .lintstagedrc
├── .prettierignore
├── .prettierrc
├── commitlint.config.ts
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── 📁 .github
│ └── 📁 workflows
│ └── sync-main-with-dev-and-deploy.yml
├── 📁 .husky
│ ├── commit-msg
│ └── pre-commit
├── 📁 public
│ ├── android-chrome-192x192.png
│ ├── android-chrome-512x512.png
│ ├── apple-touch-icon.png
│ ├── favicon-16x16.png
│ ├── favicon-32x32.png
│ ├── favicon.ico
│ ├── site.webmanifest
│ └── vite.svg
└── 📁 src
├── App.tsx
├── main.tsx
├── vite-env.d.ts
├── 📁 assets
│ └── react.svg
├── 📁 components
│ ├── Blob.tsx
│ ├── Card.tsx
│ ├── Cards.tsx
│ ├── CardSkeleton.tsx
│ ├── Detail.tsx
│ ├── ErrorBoundary.tsx
│ ├── Footer.tsx
│ ├── Loader.tsx
│ ├── Pagination.tsx
│ ├── SearchBar.tsx
├── 📁 graphql
│ ├── apolloClient.ts
│ ├── cacheOptions.ts
│ ├── hooks.ts
│ └── queries.ts
├── 📁 styles
│ ├── 📁 app
│ │ └── App.styles.tsx
│ ├── Base.styles.tsx
│ ├── 📁 blob
│ │ └── Blob.styles.tsx
│ ├── 📁 card
│ │ └── Card.styles.tsx
│ ├── 📁 cards
│ │ └── Cards.styles.tsx
│ ├── 📁 detail
│ │ └── Detail.styles.tsx
│ ├── 📁 footer
│ │ └── Footer.styles.tsx
│ ├── GlobalStyle.tsx
│ ├── 📁 loader
│ │ └── Loader.styles.tsx
│ ├── 📁 pagination
│ │ └── Pagination.styles.tsx
│ ├── 📁 searchBar
│ │ └── SearchBar.styles.tsx
│ ├── 📁 select
│ │ └── Select.styles.tsx
└── types.ts
└── 📁 utils
└── consts.ts

## Instructions

### Functional Requirements

#### Search Page:

- The application features a homepage with a search field.
- Users can enter a character's name in the search field.
- The application displays the corresponding search results.

#### Filters:

- Three filters are implemented on the search page: status, species, and gender.
- Users can select the desired value in each filter.
- The application displays results corresponding to the filter selection.

#### Detail View:

- Clicking on a character from the result list displays a detail page or modal with additional information about the selected character.
- At least the image, name, species, status, and origin of the character are displayed.

#### GraphQL:

- The application utilizes GraphQL to query the Rick and Morty API instead of solely relying on REST.

#### Style and Design:

- Styles are applied to make the application visually appealing and user-friendly.

#### Pagination:

- Pagination is implemented in the result list to display more characters as the user scrolls.

## Deployment

The application is deployed on GitHub pages.

## Workflow

- Best practices such as Gitflow, code organization, structure, efficiency, etc.

# monorepo
- lerna
- vue3
- storybook
- typescript
- tailwindcss
- jest

## Getting Started
```
npm i -g lerna
```

## Setup & Update
```
npm start

or

lerna clean
lerna bootstrap
```
---
## Project Management
- ### Added
    ```
    npm run project:added
    Added to Projects? <Project name>
    ```
    - root package.json add to run serve script
    ```
    {
        ...
        "scripts": {
            ...
            "dev:<Project name>": "cd projects/<Project name> && npm run serve"
            ...
        }
    }
    ```
- ### Run & Storybook
    ```
    npm run storybook
    
    or
  
    npm run dev:<Project name>  
    ```
- ### Build
    ```
    npm run project:build
    Build to Project? <Project name>
    ```
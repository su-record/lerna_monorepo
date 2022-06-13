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
    Added to Projects name? <Project name>
    ```
    - root package.json add to script
    ```
    {
        ...
        "scripts": {
            ...
            "dev:<project name>": "cd projects/<project name> && npm run serve"
            ...
        }
    }
    ```
- ### Run & Storybook
    ```
    npm run storybook
    
    or
  
    npm run dev:<project name>  
    ```
- ### Build
    ```
    npm run project:build
    Build to Project name? <Project directory name>
    ```
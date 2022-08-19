# Curating 5 : monorepo
- lerna
- vue3
- storybook
- typescript
- tailwindcss
- jest

## Getting Started
>Node version ^16.x
- ### Lerna & Yarn install
  ```
  npm i -g lerna
  npm i -g yarn
  ```
- ### Setup & Update
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
    Added to Project? <Project name>
    ```
  - root package.json add to script & dependencies
    ```json
    {
      "scripts": {
        "dev:<Project nick name>": "cd projects/<Project folder> && npm run serve"
      },
      "dependencies": {
        "<Project name>": "file:projects/<Project name>"
      }
    }
    ```
  - root folder path ```npm run update```
- ### Run & Storybook
    ```
    npm run storybook
    
    or
  
    npm run dev:<Project nick name>  
    ```
- ### Local Build
    ```
    npm run project:build
    Build to Project? <Project name>
    ```
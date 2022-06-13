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

### Package install & Update
```
npm start

or

lerna clean
lerna bootstrap
```
---
### new project folder
```
npm run project:added
Added to Projects name? <Project directory name>
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
---
### project build
```
npm run project:build
Build to Project name? <Project directory name>
```
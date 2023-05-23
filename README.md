[![Build Status][ci-image]][ci-url]
[![Coverage Status](https://coveralls.io/repos/github/AlexSaxena/webb22_alm_cicd/badge.svg?branch=main&service=github)](https://coveralls.io/github/AlexSaxena/webb22_alm_cicd?branch=main)

# webb22_alm_cicd

## Getting Started

To get a local copy up and running follow these simple steps.
<br>

### Install Husky

Before starting make sure you have the latest version of NPM installed.  
<br>
You can install the latest version using this commmand

- npm

  ```sh
    npm install npm@latest -g
  ```

  <br>

- Husky

  ```sh
    npm install husky --save-dev
  ```

  Edit package.json > prepare script and run it once:

  ```sh
    npm pkg set scripts.prepare="husky install"
    npm run prepare
  ```

  Add a hook:

  ```sh
  npx husky add .husky/pre-commit "npm test"
  git add .husky/pre-commit
  ```

  Make a commit:

  ```sh
    git commit -m "Keep calm and commit"
    # `npm test` will run
  ```

For further explanation see official Documentation https://typicode.github.io/husky/
<br>

### Author

Alex Saxena

[ci-image]: https://github.com/AlexSaxena/webb22_alm_cicd/actions/workflows/test.yml/badge.svg
[ci-url]: https://github.com/AlexSaxena/webb22_alm_cicd/actions/workflows/test

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# react-auth-template


## Installation

1. [Download](../../archive/master.zip) this template.
1. Unzip and rename the template directory (`unzip ~/Downloads/react-auth-template-master.zip`).
1. Move into the new project and `git init`.


## Deployment

1.  `npm install gh-pages`
2.  Update package.json with 
```
"homepage": "http://<git-name>.github.io/<repo-name>"
```
```
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

- `npm run start`: generates bundles, watches, and livereloads.
- `npm run deploy`: builds and deploys master branch

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

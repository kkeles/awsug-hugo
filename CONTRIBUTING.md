# Contributing

It is based on hugo modules: https://gohugo.io/hugo-modules/use-modules/

## Prerequisites
- install dependencies
```sh
brew install go hugo
```

1. Create a fork of the repo [here](https://github.com/kkeles/awsug-hugo/fork) if you do not have permissions in this repository, otherwise clone it directly
1. Clone the repo: https://github.com/<your-fork>/awsug-hugo/fork
2. Create a local development branch and enable hot reload
```bash
git checkout -b feat/my-feature
hugo server --disableFastRender
```
3. Do you changes of css, partials or layouts and you will see the instant update
```bash
git add .
git commit -m"fix: background"
```
4. Open a Pull Request

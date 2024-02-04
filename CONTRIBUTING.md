# Contributing

1. Create a fork of the repo: https://github.com/kkeles/awsug-hugo/fork
2. Create a local development repo based on the `exampleSite`
```bash
hugo new site awsug-dev
cd awsug-dev
git clone git@github.com:<your-fork>/awsug-hugo.git themes/awsug
cp -r themes/awsug/exampleSite/* .
hugo server
```
3. Create a branch, such as `fix/background`
```bash
cd themes/awsug
git checkout -b fix/background
git add .
git commit -m"fix: background"
```
4. Do you changes in `theme/awsug`, commit, push to your fork and create a PR :tada:

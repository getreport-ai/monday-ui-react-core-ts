```

git checkout original
git branch update-aug-30
git checkout update-aug-30
git fetch upstream
git merge upstream/master

find . -type d -name "__tests__" -exec rm -rf {} +

git add *
git commit -m "Delete tests"

apply patch https://github.com/getreport-ai/monday-ui-react-core-ts/commit/857bc8082356602ba05099c2d8896a67c93af22c.patch

npm run build:esm && npm run build:types
```

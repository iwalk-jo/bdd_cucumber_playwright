# twoMatches bdd

twoMatches BDD framework built with cucumber-js and playwright (temporary)


## Run

Run cucumber-js with yarn command base no tags

```bash
yarn cucumber
```

Run cucumber-js @dev

```bash
yarn cucumber:dev
```

Run cucumber-js @smoke

```bash
yarn cucumber:smoke
```
Run cucumber-js @regression

```bash
npm run cucumber:regression
```

Manually select automation browser

```bash
export UI_AUTOMATION_BROWSER=chromium
```

```bash
export UI_AUTOMATION_BROWSER=firefox
```

Running cucumber scenarios using profile

```bash
yarn cucumber --profile dev
```
grant access to run script runner

```bash
chmod +x ./run_tests.sh
```

windows specific script runner

```bash
./run_tests.bat dev
```

bash specific script runner

```bash
./run_tests.sh dev
```
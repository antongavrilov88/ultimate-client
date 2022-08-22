# Awesome boilerplate for react project
 - [Overview](#overview)
 - [Install dependencies](#install-dependencies)
 - [Development server](#development-server)
 - [Storybook](#storybook)
 - [Tests](#tests)
 - [API](#api)
 - [GIT](#git)



## Overview
Here is my awesome template for react app! It can be used as a start for any project.
Very easy to extend and to customize.
Perfectly work my awesome server template https://github.com/antongavrilov88/ultimate-server
But you can make it work with any API (basically just update transformInput/transformOutput methods in implementors)
#### libs overview (except obvious)
- jest - for testing
- styled-components - to make our UI nice) Also styled-components makes theme-switching very easy
- storybook - incredibly powerfull library! Developing complex components is just a game now - thanks for storybook! It provides very simple interface that allows you to change component props and monitor component behavior while you changing props.
- husky - very cool library. Here I'm using it for precommit-hooks. So every time you want to commit your code, some hooks will be called. Code will be checked with linter, prettier and then all tests will be run. If everything is ok - code will be committed. It can be disturbing and annoying, but as a result you got clean and nice code in your repository.
- ESLinter - for code-style
- Prettier - same thing
- redux - for managing app state.
- redux-toolkit - provides easy way to create actions and build reducers for redux
- redux-saga - very powerful lib! It is generator-based tool to handle all async calls and to isolate them from app state. It also has a lot of advanced features, such as making parallel branches, shooting them down, cool api for listening dispatched actions. You can listen for every case of dispatching particular action or just last case, which is nice way to handle for example api-calls for key-up events.


#### folders structure


## Install dependencies

In the root of the project run:
```
yarn prepare
```
Husky will be installed. So now every time you try to commit changes, husky-hooks will be called before commit.

## Development server
In the root of the project run:
```
yarn s
```

## Storybook
In the root of the project run:
```
yarn sb
```

The project storybook will be run at:
```
localhost: 6006
```
You can look through project components and some blocks of components. Configure their props.
Look through components APIs.

## Tests
In the root of the project run:
```
yarn test
```
#### This command will run scripts to test:
 - ##### all the redux logic:
    - action creators tests (all action creators should create correct actions)
    - reducer tests (all reducers should handle actions correctly and return expected state)
    - sagas tests (all sagas should run silent and put correct actions - doesn't matter if there are any errors or there are not)
    - integration tests (every dispatched action should be handled correctly, trigger the correct saga and finally after all reducers are complete we should get expected state)
 - ##### all components and containers:
   - render test (all components should be rendered)
   - conditional render test (all components should be rendered correctly with different props)
   - snapshot tests (all components should be rendered the same way we expect them to, after the app code changed)
 
## API
Here is description of API, the app will perfectly work with.
```

```

Also the app-adapters mechanism that can be easily customized.

## GIT
- ### commit
   - All changed files will be tested by the eslinter and the prettier.
   - If code-style is ok, all project tests will be run, so you can be sure the new code doesn't interrupt the old one.
   - After these steps, the commit message will be checked.
   - If all those steps passed clear, changes will be committed.

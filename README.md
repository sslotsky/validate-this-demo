# react-redux-boiler

A boilerplate app complete with API authentication. Use this to hit the ground running on your next React project.

## Running

Make sure you have `yarn` installed, and then:

```
yarn run fresh
```

## Detaching

At some point you'll want your new project in your own repo. Before you can do that, you'll need to run:

```
yarn run sever
```

This removes all existing git information from the project so you can reinitialize.

## Dependencies

Dependencies are added through scripts in order to get the latest and greatest. In some cases, specific packages
have been locked down to avoid this. In the future, if newer versions of dependencies break the boiler plate, we
can choose to lock those dependencies down to previous versions, or update the boiler plate. We'll handle this case
by case.

The current versions of all dependencies can be found in the `yarn.lock` file. This file ensures that anyone using
this boiler plate will have the same versions for all dependencies. When version upgrades are desired, update the
version numbers in `package.json` and run [yarn upgrade](https://yarnpkg.com/en/docs/cli/upgrade).

# NestJS App

## Description

A simple NestJS application with a single feature module : **UsersModule**. Project demonstrates a clean structure and environment-based configuration. Project can be used as a skeleton for a new NestJS application.

## Tech Stack

- Node.js
- NestJS
- TypeScript

## Modules

### AppModule

The root module of the application. It imports the UsersModule and ConfigModule. ConfigModule is imported with option `isGlobal: true`, so it means it is accessible in other modules,no need to import it.

### UsersModule

This is a users domain module that contains all user-related logic. It shows how the feature module can be imported in the AppModule.


## Environment Configuration

App uses **@nestjs/config** for environment variables.

### Configuration file

`env.example` - template for required environment variables.

The path to correspondent file with environment variables is set in AppModule with `envFilePath` property. It supports local and development config.

App uses centralized configuration file `src/config/configuration.ts`, where environment variables are mapped into configuration object. 

```
ConfigModule.forRoot({
  load: [configuration],
})
```

## Project setup

1. Install dependencies.

```bash
$ npm install
```

2. Create local and development environment files and fill in required values.

```bash
$ cp env.example .env.local
```

```bash
$ cp env.example .env.development
```

## Compile and run the project

```bash
# development
$ npm run start

# local watch mode
$ npm run start:local

# development watch mode
$ npm run start:dev
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
# Carnival Vue

Carnival Vue is a demonstration web application that exercises parts of the Carnival framework including graph model validation.

## Getting Started

### Pre-requisites

1. Install [npm](https://www.npmjs.com/get-npm).
2. Install [Vue CLI](https://cli.vuejs.org/).
3. Install [Carnival Micronaut](https://github.com/augustearth/carnival-micronaut).

## Quick Start
```
git clone https://github.com/augustearth/carnival-vue.git
cd carnival-vue
npm install
npx vue-cli-service serve --port=7001
```

- Go to `http://localhost:7001/`.
- Type `Person` in the Label field and click Create.
- You should see a new vertex with label 'Person' and a **constraint** error.
- Type `Application` in the Label field and click Create.
- You should see a new vertex with label 'Applicatio' and a **model** error.



## Project setup


### Compiles and hot-reloads for development
Default port (8080):

```
npm run serve
```

Custom port:

```
npx vue-cli-service serve --port=7001
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Vue CLI

```
vue ui
```

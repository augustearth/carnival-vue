#!/bin/sh
npx vue-cli-service build
docker build -t carnival-vue .


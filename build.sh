#!/bin/sh
cd public-html/
npm install
cd ../
docker build -t carnival-vue .


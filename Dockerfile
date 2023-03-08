FROM node:18.0.0

WORKDIR /app

COPY package.json /app/

RUN yarn

COPY . /app/
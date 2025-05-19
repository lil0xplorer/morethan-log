FROM node:18-bookworm

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

ENV PATH /app/node_modules/.bin:$PATH
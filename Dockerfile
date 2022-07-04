FROM node:14.17.1-alpine as base

WORKDIR /usr/src/app
COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 8080
CMD [ "node", "index.js" ]

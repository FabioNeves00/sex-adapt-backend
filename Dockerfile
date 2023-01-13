FROM node:16.18.1-alpine as api

WORKDIR /app

COPY ["package*.json", "./"]

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8080

RUN npm i --global @nestjs/cli

CMD [ "npm", "run", "start:dev" ]

FROM postgres AS db

COPY ./src/migrations/init.sql /docker-entrypoint-initdb.d/

FROM node:17.8.0-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD [ "npm", "run", "dev" ]
FROM node:17.8.0-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm install -g nodemon

EXPOSE 8000

CMD npm run dev
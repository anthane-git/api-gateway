FROM node:17.8.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon \ 
	npm ci

COPY . .

EXPOSE 80

CMD [ "npm", "run", "dev" ]
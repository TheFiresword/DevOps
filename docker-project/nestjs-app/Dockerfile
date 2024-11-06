FROM node:latest
WORKDIR /app

COPY code/package*.json ./
COPY code/nest-cli.json ./

RUN npm install

COPY code .

EXPOSE  3000

RUN chmod +x /app/node_modules/.bin/nest

CMD [ "npm", "run", "start:dev" ]

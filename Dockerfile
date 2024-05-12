FROM node:18

WORKDIR /usr/src/app

COPY . .


WORKDIR /usr/src/app/frontend
RUN NODE_ENV=development npm i
RUN npm run build

WORKDIR /usr/src/app/backend
RUN NODE_ENV=development npm i

EXPOSE 4000

CMD [ "node", "app.js"]
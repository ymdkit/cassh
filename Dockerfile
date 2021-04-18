FROM node:15.14.0-alpine3.10

WORKDIR /app
ADD . /app

RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
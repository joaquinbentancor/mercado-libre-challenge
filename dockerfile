FROM node:lts-slim

ENV MERCADO_LIBRE_API_URL=https://api.mercadolibre.com

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]
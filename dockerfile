FROM node:lts-slim

ENV MERCADO_LIBRE_API_URL=https://api.mercadolibre.com

ENV PORT=3000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]
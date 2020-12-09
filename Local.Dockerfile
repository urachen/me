FROM node:lts-alpine3.11 AS builder

RUN apk add tzdata && \
    cp /usr/share/zoneinfo/Asia/Taipei /etc/localtime && echo "Asia/Taipei" > /etc/timezone && \
    apk --no-cache add \
    automake \
    libtool \
    nasm \
    autoconf \
    gcc \
    musl-dev \
    make \
    zlib-dev \
    zlib

WORKDIR /www

COPY . .

RUN rm -rf node_modules && npm install && npm run build

CMD [ "npm", "run", "dev" ]
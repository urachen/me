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

ARG BASEURL

WORKDIR /www

COPY . .

RUN rm -rf node_modules && npm install && BASEURL=${BASEURL} npm run build

FROM nginx:alpine

WORKDIR /www

COPY --from=builder /www/src/dist .

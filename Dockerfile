FROM node:8.14.0-alpine
ARG UID=1000
ARG GID=1000

WORKDIR /app
COPY . /app
RUN yarn install && chown -R $UID:$GID /app

USER node

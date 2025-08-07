# syntax=docker/dockerfile:1
FROM node:22-alpine
ENV NODE_ENV=production
RUN apk add --no-cache g++ make
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn build
CMD ["yarn","start"]
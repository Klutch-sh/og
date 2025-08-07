# syntax=docker/dockerfile:1
FROM node:20-alpine
ENV NODE_ENV=production
RUN apk add --no-cache g++ make
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build
CMD ["npm","start"]
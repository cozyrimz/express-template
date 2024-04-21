# FROM node:carbon
# 16Alpiine is a lightwieght 117MB  Alpine Linux image
FROM node:21-alpine

WORKDIR /usr/app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src

#install packages post install will run tsc
RUN npm install

#expose port to listen on in container
EXPOSE 5001

CMD ["npm","start"]
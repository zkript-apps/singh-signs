FROM node:18-alpine
RUN apk add git
WORKDIR /singh-signs
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev
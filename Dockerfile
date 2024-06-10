FROM node:alpine

EXPOSE 8080
COPY . /app
WORKDIR /app
RUN npm install vite -g
RUN npm install
CMD npm run dev

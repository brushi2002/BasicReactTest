FROM node:alpine
RUN groupadd docker -g 800

COPY . /app
WORKDIR /app
RUN npm install vite -g
RUN npm install
CMD npm run dev

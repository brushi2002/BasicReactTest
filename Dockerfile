FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install vite -g
RUN npm install
CMD npm run dev

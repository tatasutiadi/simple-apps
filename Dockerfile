FROM node:18.16.0-slim
WORKDIR /app
ADD . /app
EXPOSE 3000
RUN npm install
CMD npm start

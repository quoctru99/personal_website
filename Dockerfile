FROM node:10-alpine 

WORKDIR /src/client

COPY package*.json ./

RUN npm install

COPY . /src/client

CMD ["npm","start"]

EXPOSE 3000
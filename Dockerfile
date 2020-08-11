FROM node:12

COPY package.json .
RUN npm install

COPY . .

RUN echo 'NODE_PATH=src' > .env

RUN npm run build

RUN npm install -g serve
ENTRYPOINT ["serve"]
CMD ["-s", "build"]

EXPOSE 5000
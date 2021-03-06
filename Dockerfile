FROM node:12

ENV NODE_PATH=src

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve
ENTRYPOINT ["serve"]
CMD ["-s", "build"]

EXPOSE 5000
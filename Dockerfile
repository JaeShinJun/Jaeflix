FROM node:12

ARG NODE_PATH
ENV NODE_PATH=$NODE_PATH

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve
ENTRYPOINT ["serve"]
CMD ["-s", "build"]

EXPOSE 5000
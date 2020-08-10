FROM node:12

COPY . .

RUN npm install
RUN echo 'NODE_PATH=src' > .env

ENTRYPOINT ["npm"]
CMD ["start"]

EXPOSE 3000
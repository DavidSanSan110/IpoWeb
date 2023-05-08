FROM node:18.15.0
WORKDIR /home/node/app
COPY *.json ./
RUN npm ci && npm cache clean --force
EXPOSE 3000
CMD [ "npm","start" ]
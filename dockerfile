FROM node:slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV NODE_ENV =production
COPY ["package.json","package-lock.json","./"]
RUN npm install --production 
COPY . . 
EXPOSE 5000
CMD [ "npm","start"] 
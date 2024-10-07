FROM node:14

WORKDIR /Users/mutdurai/work/learning/Nodejs/CICDProject

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","server.js"]
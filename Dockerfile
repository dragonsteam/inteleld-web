# Step 1: build stage
FROM node:18

WORKDIR /app

COPY package*json .

RUN npm install

COPY . .

CMD npm run dev
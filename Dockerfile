# Step 1: build stage
FROM node:18-alpine as build-stage

WORKDIR /app

COPY package*json .

RUN npm install

COPY . .

RUN npm run build


# CMD echo finished
# ENTRYPOINT [ "echo", "finished" ]

# Step 2: production stage
FROM nginx:1.25-alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
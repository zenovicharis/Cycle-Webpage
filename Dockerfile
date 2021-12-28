FROM node:16.13-alpine3.14 as build

WORKDIR /app

COPY ./yarn.lock /app/yarn.lock
COPY ./package.json /app/package.json

RUN yarn install
COPY . .
RUN yarn run build


FROM nginx:latest
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
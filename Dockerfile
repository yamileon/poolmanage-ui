FROM node:alpine as build
WORKDIR /build
COPY . .
RUN NG_CLI_ANALYTICS=ci npm install -g @angular/cli
RUN NG_CLI_ANALYTICS=ci npm install
RUN ng build

FROM nginx:latest
WORKDIR /app
COPY --from=build /build/dist/poolmanger-ui .
COPY nginx.conf /etc/nginx/nginx.conf


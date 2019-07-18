FROM node as nod

WORKDIR /build

COPY . .

RUN npm install

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=nod /build/dist/poolmanger-ui /usr/share/nginx/html

copy nginx.conf /etc/nginx/nginx.conf

expose 80

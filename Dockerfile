FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM httpd:latest AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
FROM node:18 as react
WORKDIR /app
COPY package* .
RUN npm install
COPY public ./public
COPY src ./src
RUN npm run build 

FROM nginx:alpine
COPY --from=react /app/build /usr/share/nginx/html

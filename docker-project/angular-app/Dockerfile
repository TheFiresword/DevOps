FROM node:latest AS builder
WORKDIR /app
COPY code/package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY code .

RUN ng build --configuration=production

# Serve with nginx
FROM nginx:latest

COPY --from=builder /app/dist/book-tracker /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# 1) Bygg React/Vite
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 2) Servera builden
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
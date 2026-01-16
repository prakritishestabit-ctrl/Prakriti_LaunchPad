FROM node:18-alpine
# Install curl for healthcheck
RUN apk add --no-cache curl
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN mkdir -p logs
EXPOSE 5000
CMD ["node", "src/app.js"]
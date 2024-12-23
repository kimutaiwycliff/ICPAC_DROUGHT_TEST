# Build stage
FROM node:18 as build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code and build the app
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build files to nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (nginx default)
EXPOSE 80

# Start nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]

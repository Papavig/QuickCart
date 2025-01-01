# Stage 1: Build the React app
FROM node:16 AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy build files from the previous stage
COPY --from=build /app/dist .

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

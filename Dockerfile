FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build Astro project
RUN npm run build

# Specify the command to start your application
CMD ["npm", "start"]

# set the NODE_ENV environment variable to production
ENV NODE_ENV production
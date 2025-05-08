# Use the official Node.js image as a base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Copy the rest of the application's files to the working directory
COPY . .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]

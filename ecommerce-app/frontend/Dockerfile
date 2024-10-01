# Use an official Node.js 14 image as the base
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY src/ ./

# Expose the port
EXPOSE 80

# Run the command to start the development server
CMD ["npm", "start"]

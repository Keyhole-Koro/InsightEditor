# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application's source code to the working directory
COPY . .

# Compile the TypeScript code
RUN npx tsc

# Expose a port (useful if running a web server)
EXPOSE 3000

# Command to run the app
# If you're running a web server, replace `npx ts-node src/index.ts` with your server start command.
CMD ["npx", "ts-node", "src/index.ts"]

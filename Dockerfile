FROM node
WORKDIR /app 
COPY package.json .
RUN npm i
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["node", "index.js"]
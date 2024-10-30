FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 26868

# Start the application
CMD ["npm", "run", "start:prod"]
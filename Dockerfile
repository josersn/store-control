FROM node:16.14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy source code
COPY package*.json ./

# Running npm install
RUN npm install && npm install -g ts-node && npm install prisma@4.3.1 -g

# Copy all files
COPY . .

# Open the mapped port
EXPOSE 3000

CMD ["sh", "-c", "npm run dev"]
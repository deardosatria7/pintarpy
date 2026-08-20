# 1. Base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install deps
COPY package.json package-lock.json ./
RUN npm ci

# 4. Copy all source files
COPY . .

# 5. Build Next.js
RUN npm run build

# 6. Expose port
EXPOSE 3000

# 7. Start Next.js
CMD ["npm", "start"]

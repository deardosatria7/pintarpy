# 1. Base image
FROM node:18-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install only prod deps
COPY package.json package-lock.json ./
RUN npm ci

# 4. Copy all source files
COPY . .

ENV DATABASE_URL="postgresql://postgres:m1xhxqwjffutxsxc@pintarpy-pintarpydb-aytc9a:5432/postgres"
# add this
RUN npx prisma migrate dev --name move to new db

# 5. Generate Prisma client
RUN npx prisma generate

# 6. Build Next.js
RUN npm run build

# 7. Set environment and expose port
ENV PORT=3001
EXPOSE 3001

# 8. Start Next.js
CMD ["npm", "start"]
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Salin package file dan install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Salin semua source code
COPY . .

# Batasi RAM saat build
ENV NODE_OPTIONS=--max-old-space-size=512
RUN npm run build

# Stage 2: Runtime image
FROM node:18-alpine
WORKDIR /app

# Salin hasil build dari builder stage
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package*.json ./

# Install hanya prod dependencies
RUN npm ci --omit=dev

EXPOSE 3000
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]

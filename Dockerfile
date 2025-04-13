# Gunakan image Node.js yang ringan
FROM node:18-alpine AS builder

WORKDIR /app

# Salin package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Salin seluruh proyek
COPY . .

# Build Next.js
RUN npm run build

# ===============================
# Stage untuk menjalankan aplikasi
FROM node:18-alpine

WORKDIR /app

# Salin hasil build dari stage builder
COPY --from=builder /app ./

# Expose port 3000 untuk Next.js
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]# Gunakan image Node.js yang ringan
FROM node:18-alpine AS builder

WORKDIR /app

# Salin package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Salin seluruh proyek
COPY . .

# Build Next.js
RUN npm run build

# ===============================
# Stage untuk menjalankan aplikasi
FROM node:18-alpine

WORKDIR /app

# Salin hasil build dari stage builder
COPY --from=builder /app ./

# Expose port 3000 untuk Next.js
EXPOSE 3000

# Jalankan aplikasi
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]
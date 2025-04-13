# Tahap 1: Build aplikasi Next.js
FROM node:18-alpine AS builder

WORKDIR /app

# Copy file konfigurasi
COPY package.json pnpm-lock.yaml ./

# Install dependencies (hanya yang dibutuhkan untuk build)
RUN corepack enable && pnpm install

# Salin seluruh proyek ke container
COPY . .

# Build Next.js
RUN pnpm build

# Tahap 2: Hanya jalankan hasil build, lebih ringan
FROM node:18-alpine

WORKDIR /app

# Enable pnpm (jika belum diinstal global di image base)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Salin hanya yang dibutuhkan untuk menjalankan app
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./

# Install hanya dependencies produksi
RUN pnpm install --prod

# Expose port aplikasi
EXPOSE 3000

# Jalankan Next.js
CMD ["pnpm", "start", "--", "-H", "0.0.0.0"]

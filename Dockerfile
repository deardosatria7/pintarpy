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
# BETTER_AUTH_SECRET di sini semata agar `next build` tidak jatuh ke secret
# default better-auth. Nilai asli WAJIB datang dari environment runtime;
# placeholder ini sengaja dikenali dan ditolak oleh app/api/auth/[...all].
# Sengaja prefix pada RUN, bukan ENV: image ini satu stage, jadi ENV akan ikut
# terbawa ke container dan menutupi variabel runtime.
RUN BETTER_AUTH_SECRET="build-only-placeholder-do-not-use-at-runtime" npm run build

# 6. Expose port
EXPOSE 3000

# 7. Start Next.js
CMD ["npm", "start"]

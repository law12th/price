FROM node:alpine

WORKDIR /usr/app
COPY ./package.json ./
RUN pnpm install
RUN pnpm add pm2 -g
COPY ./ ./

CMD ["pnpm", "run", "start"]
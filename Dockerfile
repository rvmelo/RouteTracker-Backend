FROM node:22.8.0-slim

RUN apt-get update && apt-get install openssl procps -y

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]
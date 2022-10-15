FROM node:10.15.3

RUN yarn global add lerna && apt -q update && apt install -qy zip unzip

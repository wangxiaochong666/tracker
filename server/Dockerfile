FROM keymetrics/pm2:latest-alpine
COPY . .
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
CMD [ "pm2-runtime", "start", "pm2.json" ]
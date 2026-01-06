# Deployment Notes

## Requirements
- Node.js 18+
- Managed Redis (Upstash / Redis Cloud)

## Redis
Redis is used via a managed cloud service due to restricted system permissions
on office laptops.

## Start Application
node src/server.js

## Start Worker
node src/workers/email.worker.js

## Production (PM2)
pm2 start prod/ecosystem.config.js

## Logs
src/logs/app.log
src/logs/error.log

#!/bin/bash
#!/bin/bash

echo "Starting Trusted HTTPS Deployment..."

# 1. Ensure directories exist
mkdir -p certs backend/logs

# 2. Generate Trusted SSL Certificates using mkcert
echo "Generating Trusted Certificates..."
mkcert -cert-file certs/cert.pem -key-file certs/key.pem localhost 127.0.0.1 ::1

# 3. Create .env file
echo "Creating .env file..."
echo "MONGO_URI=mongodb://db:27017/shoutout_db" > .env

# 4. Deploy
echo "Restarting Containers..."
docker compose -f docker-compose.prod.yml --profile capstone up -d --force-recreate

# UPDATED LINE BELOW
echo "Success! Refresh your browser at https://localhost:8443"
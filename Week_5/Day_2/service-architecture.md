# Service Architecture – Day 2

This application consists of three services managed using Docker Compose.

## Services

1. MongoDB
   - Stores application data
   - Uses Docker volume for persistence

2. Node.js Server
   - Exposes REST API on port 5000
   - Connects to MongoDB using container networking

3. React Client
   - Frontend application
   - Fetches data from Node server

## Networking

Docker Compose creates a default bridge network.
Services communicate using service names:
- Client → server
- Server → mongo_db

## Volumes

MongoDB uses a named volume to persist data:
- mongo_data

## Startup

All services are started using:
docker compose up -d

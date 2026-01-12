
---

## Services

### 1. Backend Service
- Node.js + Express
- Exposes `/api` endpoint on port `3000`
- Returns container hostname to identify which backend handled the request

### 2. NGINX Reverse Proxy
- Runs inside a Docker container
- Listens on port `8080`
- Routes `/api` requests to backend services
- Uses **round-robin load balancing** (default NGINX behavior)

---

## Docker Networking

Docker Compose creates a **default bridge network**.
All services communicate using **service names** instead of IP addresses.

- NGINX → `backend1`, `backend2`
- Backends are not exposed to the host directly

---

## Load Balancing Strategy

NGINX uses **round-robin load balancing** by default when multiple servers are
defined in an `upstream` block.

Each incoming request is forwarded to the next available backend container.

---

## How to Run

```bash
docker compose up --build

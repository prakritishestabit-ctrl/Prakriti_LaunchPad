## Day 5 Capstone: Production Shout-out Wall Guide

### Project Overview
This project demonstrates a production-grade deployment of a full-stack application using **Docker**, **Nginx (Reverse Proxy)**, and **HTTPS (SSL)**. It is designed to be resilient, secure, and automated.



---

### DevOps Features Implemented

#### 1. Reverse Proxy & HTTPS
Nginx acts as the entry point, handling SSL termination. 
* **Internal Routing:** Redirects HTTP to HTTPS.
* **API Proxying:** Routes all `/api` traffic to the backend container.
* **Security:** Uses `mkcert` for locally trusted certificates.

#### 2. Health Checks
The backend container includes a health check that runs every 10 seconds. 
* **Method:** Uses `curl` inside the container to ping the `/health` endpoint.
* **Benefit:** Ensures Nginx only sends traffic to a fully initialized backend.

#### 3. Log Rotation
To prevent the server from running out of disk space, Docker is configured to rotate logs:
* **Max Size:** 10MB per file.
* **Retention:** Maximum of 3 files per service.

#### 4. Data Persistence
A named volume (`mongo_data`) is used for the database.
* **Benefit:** Your messages remain safe even if the containers are deleted or updated.

---

### Deployment Instructions

#### Prerequisites
1. **Docker & Docker Compose** installed.
2. **mkcert** installed and initialized (`mkcert -install`).

#### Setup Steps
1. **Prepare Directories:**
   ```bash
   mkdir -p certs backend/logs


### Final Check
You now have:
1.  **Fully functional code** for Backend, Frontend, and Nginx.
2.  **Working Docker orchestration** with Healthchecks and Volumes.
3.  **Automated HTTPS** with `mkcert`.
4.  **The production-guide.md** in code format for your submission.

**Would you like me to provide the "Demo Script" now so you know exactly what to say while showing these features?**


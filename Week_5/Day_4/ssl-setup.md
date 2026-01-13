# SSL Setup using mkcert (Day 4)

## Overview
The goal of this assignment is to understand how HTTPS works and how to create a secure connection locally without a real domain.

In this setup:
- We used mkcert to generate a local SSL certificate
- Configured NGINX to handle HTTPS
- Used NGINX as a reverse proxy
- Redirected HTTP traffic to HTTPS

## Why mkcert
Normally, SSL certificates are issued by trusted Certificate Authorities (CA).  
For local development, this is not possible.

mkcert:
- Creates a local CA on our system
- Browsers trust this local CA
- This allows the lock icon to appear without warnings
- Gives a proper HTTPS experience locally

## Steps we did
1. Installed mkcert and setup a local CA  
2. Generated an SSL certificate for the domain `local.test`  
3. Mapped `local.test` to `127.0.0.1` in `/etc/hosts`  
4. Mounted SSL certificates into the NGINX container  
5. Configured NGINX to listen for HTTPS on port 8443  
6. Enabled redirect from HTTP (8080) → HTTPS (8443)  
7. Connected NGINX to backend containers

## How the request flows
Browser → HTTPS request → NGINX  
NGINX → Terminates SSL  
NGINX → Forwards the request to backend container over HTTP  
Backend → Sends response  
NGINX → Sends response back to the browser

## Verification
In the browser:
- Open `https://local.test:8443/api`  
- Lock icon appears  
- No certificate warnings  
- Backend response is displayed correctly

This confirms:
- SSL is configured correctly  
- NGINX reverse proxy is working  
- HTTPS traffic reaches the backend properly

## Conclusion
From this assignment, we learned:
- How HTTPS works in real-world applications  
- How SSL termination can be done at the NGINX level  
- How backend services can stay simple without handling SSL  
- How mkcert helps create a production-like setup for local development


# Exploring Linux Inside a Docker Container

In this task, I explored how a Docker container works internally by running a Node.js application inside it.  
The purpose of this exercise was to understand that containers behave like small Linux systems and can be inspected using normal Linux commands.

---

## Container Setup

- Base image used: node:18
- Application: Simple Node.js server
- Port used by the app: 3000
- Container name: node_app
- Working directory inside container: /app

---

## Accessing the Container

To go inside the running container, I used the following command:

```bash
docker exec -it node_app /bin/sh

# Linux Inside Docker Container

## Filesystem
- Used `ls` to list application files
- App code present in /app directory

## Processes
- Used `ps` to view running processes
- Node process is running as PID 1

## Disk Usage
- Checked using `df -h`

## Logs
- Viewed using `docker logs node_app`


# ![alt text](image.png)
# ![alt text](image-1.png)
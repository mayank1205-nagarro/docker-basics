# Fullstack Project: Spring Boot + Angular with Docker Compose

## 📖 Overview
This project contains:
- **Backend**: Spring Boot application with Postgresql
- **Frontend**: Angular application
- **docker-compose.yml**: Orchestrates both services

The backend and frontend are containerized and can be run together using Docker Compose.  
The backend image can be pushed to Docker Hub for sharing and deployment.

---

## Versions used
**Docker** version 29.1.4, build 0e6fee6.   
**Docker Compose** version v5.0.1.

---

## 🛠 Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- A [Docker Hub](https://hub.docker.com/) account

---

## 📂 Project Structure
```
├── notes/
│   ├── Dockerfile
│   └── src/...
├── notes-ui/
│   ├── Dockerfile
│   └── src/...
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/mayank1205-nagarro/docker-basics.git
cd docker-basics
```

### 2. Run the Repository
```bash
docker compose up
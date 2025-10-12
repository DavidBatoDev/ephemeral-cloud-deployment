# 🌀 Ephemeral Cloud Deployment

A hands-on DevOps project designed to demonstrate **containerization**, **CI/CD pipelines**, **infrastructure automation**, and **monitoring** within an ephemeral cloud environment.  
The project showcases a simple **Tier 3 web architecture** using a React + Vite (TypeScript) frontend, an Express.js backend, and MongoDB Atlas as a managed database service.

---

## 🌐 Project Overview

**Ephemeral Cloud Deployment** simulates deploying and maintaining a production-ready application under strict time-limited cloud environments.  
The setup leverages **CircleCI** for continuous integration and deployment, and either **Terraform** or **Ansible** for automated provisioning of ephemeral infrastructure (e.g., AWS sandbox or ACloudGuru servers).  
Future extensions will include lightweight **monitoring and alerting** for uptime and health checks.

---

## ⚙️ Architecture

**Frontend:**  

- React + Vite (TypeScript)  
- Deployed on Vercel (static hosting for free tier)

**Backend:**  

- Express.js REST API  
- Deployed on Render (free service for backend)  
- Containerized using Docker for portability

**Database:**  

- MongoDB Atlas (cloud-hosted, free tier)

**CI/CD Pipeline:**  

- CircleCI for build, test, and deploy automation  
- Multi-environment support (dev, staging, production)  
- Automatic deployment triggers on branch merges

**Infrastructure Automation:**  

- **Terraform**: Define ephemeral infrastructure (VMs, networking, storage) on AWS or ACloudGuru sandbox  
  - OR **Ansible**: Configuration management for servers, Docker setup, and environment provisioning

**Monitoring (Future Extension):**  

- Basic uptime and latency tracking via an Express endpoint  
- Prometheus + Grafana (future integration)

---

## 🧩 Core Features

1. **Tier 3 Web Setup**
   - Simple 1-page frontend displaying uptime data
   - Backend API endpoint to record and retrieve downtime timestamps
   - MongoDB for persisting timestamp records

2. **Containerization**
   - Dockerized frontend and backend for consistency
   - Docker Compose for local multi-service orchestration

3. **Continuous Integration / Continuous Deployment**
   - CircleCI pipeline:
     - Build & test frontend and backend
     - Linting and type checks
     - Conditional deploy to environments based on branch (dev → staging → prod)

4. **Infrastructure as Code**
   - Terraform (or Ansible) scripts to spin up and tear down ephemeral environments automatically

5. **Monitoring (Planned)**
   - Health check route `/api/health` to measure downtime duration
   - Store timestamp in MongoDB for historical tracking

---

## 🧠 Learning Goals

- Master hands-on **DevOps lifecycle** under time-limited environments
- Gain experience with **CI/CD pipelines** and **environment automation**
- Understand **container-based deployment** across environments
- Explore **Infrastructure as Code (IaC)** using Terraform or Ansible
- Extend with **monitoring and alerting** integrations

---

## 🕒 Deployment Targets

| Layer | Platform | Purpose |
|-------|-----------|----------|
| Frontend | **Vercel** | Static hosting (fast, free) |
| Backend | **Render** | REST API service |
| Database | **MongoDB Atlas** | Cloud database |
| Infra Provisioning | **AWS Sandbox / ACloudGuru Server** | Ephemeral compute |
| CI/CD | **CircleCI** | Automated build and deployment |

---

## 🚀 Future Enhancements

- Integrate **Prometheus & Grafana** dashboards  
- Add **NGINX reverse proxy** for production  
- Implement **Blue-Green deployment** pattern  
- Add **Slack webhook alerts** for build or downtime notifications  

---

## 📁 Repository Structure (Proposed)

epheremeral-cloud-deployment/
├── frontend/ # React + Vite app
├── backend/ # Express.js API
├── infra/
│ ├── terraform/ # Terraform IaC scripts
│ └── ansible/ # (Optional) Ansible playbooks
├── .circleci/ # CircleCI pipeline configs
├── docker-compose.yml
└── README.md

---

## 🧩 Example Endpoint

`GET /api/health` → Returns app uptime and records downtime durations.  
Data is saved to MongoDB for monitoring and future visualization.

---

## 💡 Notes

- Project is **ephemeral** by design: infrastructure can spin up and shut down within 1–4 hours.
- CircleCI automates testing and deployment to free-tier services for easy reproducibility.
- Ideal for **DevOps demonstrations**, **short-lived sandbox experiments**, or **portfolio showcases**.

---

**Author:** David Bato ([@DavidBatoDev](https://github.com/DavidBatoDev))  
**Project:** *Ephemeral Cloud Deployment*  
**Stack:** React, Express, MongoDB, Docker, Terraform/Ansible, CircleCI

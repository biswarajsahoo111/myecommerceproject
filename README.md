# E-Commerce Application Deployment

## Overview
This project demonstrates the deployment of an e-commerce application using Kubernetes. The application consists of a React-based frontend, Node.js backend microservices, a MongoDB database, and RabbitMQ for asynchronous order processing.


Project Structure


ecommerce-app



├── backend

│   ├── Dockerfile

│   ├── index.js

│   └── package.json




├── frontend

│   ├── Dockerfile

│   ├── index.html

│   ├── index.js

│   └── package.json





├── manifests

│   ├── backend-deployment.yaml

│   ├── backend-hpa.yaml

│   ├── frontend-deployment.yaml

│   ├── frontend-hpa.yaml

│   ├── ingress.yaml

│   ├── mongodb-statefulset.yaml

│   ├── rabbitmq-deployment.yaml

│   ├── elasticsearch-deployment.yaml

│   ├── grafana-deployment.yaml

│   ├── kibana-deployment.yaml

│   ├── logstash-deployment.yaml

│   ├── prometheus-configmap.yaml

│   ├── prometheus-deployment.yaml

│   └── mainfests

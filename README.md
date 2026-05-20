# Vehicle Threat Intelligence & Diagnostics Platform

A full-stack vehicle cybersecurity and diagnostics dashboard that simulates real-time vehicle telemetry, detects suspicious activity, and visualizes live analytics using React and Flask.

---

# Features

- Real-time vehicle telemetry simulation
- Live dashboard updates
- Threat detection alerts
- Flask REST API backend
- React frontend dashboard
- Engine temperature monitoring
- Speed and RPM tracking
- Battery voltage analytics
- Dynamic alert system

---

# Technologies Used

## Frontend
- React
- Axios
- JavaScript
- HTML/CSS

## Backend
- Python
- Flask
- Flask-CORS

## Tools
- Git
- GitHub
- VS Code

---

# Project Structure

```text
Vehicle_Monitor_platform/
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── node_modules/
│
├── .gitignore
└── README.md
```

---

# System Architecture

```text
React Frontend
       ↓
Axios API Requests
       ↓
Flask Backend API
       ↓
Vehicle Telemetry Generator
       ↓
Threat Detection Logic
```

---

# Real-Time Telemetry

The backend simulates live vehicle telemetry including:

- Speed
- RPM
- Fuel Level
- Engine Temperature
- Battery Voltage

The frontend fetches updated data every second and displays it live on the dashboard.

---

# Threat Detection

The system generates alerts for suspicious or dangerous conditions such as:

- Engine overheating
- Dangerous speeds
- Abnormal telemetry values

Example alerts:

```text
⚠ Engine Overheating Risk
⚠ Dangerous Speed Detected
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/YOURUSERNAME/Vehicle-Threat-Platform.git
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Create virtual environment

```bash
python3 -m venv venv
```

## Activate virtual environment

Mac/Linux:

```bash
source venv/bin/activate
```

## Install dependencies

```bash
pip install -r requirements.txt
```

## Run Flask server

```bash
python3 app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start React app

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# API Endpoint

## Get Vehicle Data

```text
GET /vehicle-data
```

Example Response:

```json
{
  "vehicle_data": {
    "speed": 92,
    "rpm": 3100,
    "fuel_level": 58,
    "engine_temp": 94,
    "battery_voltage": 12.6
  },
  "alerts": [
    "⚠ Dangerous Speed Detected"
  ]
}
```

---

# Future Improvements

- Live telemetry graphs
- SQL database integration
- Vehicle history tracking
- Driver risk scoring
- Authentication system
- Multiple vehicle support
- Machine learning anomaly detection
- CAN bus simulation
- Dark mode UI
- Fleet management dashboard

---

# Resume Description

Developed a full-stack Vehicle Threat Intelligence & Diagnostics Platform using React, Flask, and Python to simulate real-time vehicle telemetry, detect cybersecurity anomalies, and visualize live vehicle analytics through an interactive dashboard.

---

# Author

Abdurrehman Amir

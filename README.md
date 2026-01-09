# Real-Time Device Tracker

## 📌 Project Overview
Real-Time Device Tracker is a web-based application that tracks the **live location of multiple devices/users on a map** in real time.  
The project demonstrates real-time communication using **WebSockets** and interactive maps, similar to tracking systems used by platforms like ride-hailing and delivery services.

---

## 🛠️ Technologies Used
- **Node.js**
- **Express.js**
- **Socket.io**
- **EJS (Embedded JavaScript Templates)**
- **Vanilla JavaScript**
- **CSS**
- **Leaflet.js**
- **OpenStreetMap API**

---

## ✨ Key Features
- Real-time device location tracking without page refresh
- Supports multiple users simultaneously
- Dynamic marker updates on live map
- Automatic removal of markers on user disconnect
- High-accuracy geolocation support
- Interactive and customizable map interface
- Lightweight and scalable architecture

---

## 🧱 Project Architecture
- **Backend** – Node.js with Express server
- **Real-time Layer** – Socket.io for bidirectional communication
- **Frontend** – EJS templates with JavaScript & CSS
- **Map Service** – Leaflet.js with OpenStreetMap

---

## 📂 Folder Structure
realtime-device-tracker/
│── public/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│
│── views/
│ └── index.ejs
│
│── app.js
│── package.json
│── README.md

--Install Dependencies
npm install

--Run the Application
Using Nodemon (Development)
npx nodemon app.js

Using Node
node app.js

Open in Browser
http://localhost:3000

WebSocket communication using Socket.io

Integration of live maps using Leaflet.js

Handling geolocation APIs

Building scalable Node.js applications

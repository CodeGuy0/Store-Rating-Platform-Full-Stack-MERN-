# 🏪 Store Rating Platform (Full-Stack MERN)

A full-stack web application that allows users to submit ratings (1–5) for stores, built as part of a Full-Stack Intern Coding Challenge.

---

## 🚀 Tech Stack

**Frontend**
- React.js (Vite)
- Axios
- Modern CSS (custom styling)

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)

**Database**
- MongoDB (MongoDB Compass)

---

## ✨ Features Implemented

### Frontend
- Clean and modern UI for submitting store ratings
- Dropdown to select rating (1–5)
- Form submission handled using Axios
- Frontend connected to backend API
- User feedback on successful submission

📸 *Frontend Screenshot*  
<img width="1132" height="330" alt="Screenshot 2026-02-05 232926" src="https://github.com/user-attachments/assets/ad4fdefb-74c3-42eb-9064-589bf7e9e55e" />
<img width="1919" height="874" alt="Screenshot 2026-02-05 232844" src="https://github.com/user-attachments/assets/8a920f44-bdc4-491e-934f-b113280573b3" />
<img width="1919" height="874" alt="Screenshot 2026-02-05 232854" src="https://github.com/user-attachments/assets/1ccfca6a-dcb6-4153-a8e5-befcb4b98c74" />
<img width="1919" height="1017" alt="Screenshot 2026-02-05 233425" src="https://github.com/user-attachments/assets/51fb883f-f6dc-4b89-8bee-e0fb5350972c" />


---

### Backend
- REST API built with Express.js
- Rating API endpoint to store ratings
- Mongoose schema for ratings
- Proper error handling and validation
- API tested using Postman

📸 *Backend Screenshot*  
<img width="1026" height="234" alt="Screenshot 2026-02-05 230030" src="https://github.com/user-attachments/assets/2894a3d6-49fd-4bb5-aad4-f7e366e60f10" />

---

### Database (MongoDB)
- Ratings stored in MongoDB using Mongoose
- Each rating saved with store reference and value
- Data verified using MongoDB Compass

📸 *MongoDB Compass Screenshot*  
<img width="1919" height="1020" alt="Screenshot 2026-02-05 233347" src="https://github.com/user-attachments/assets/d1770540-899e-4555-b130-263814e933e2" />
<img width="1458" height="243" alt="Screenshot 2026-02-05 233437" src="https://github.com/user-attachments/assets/f06b5e2b-37b7-4e40-adfe-2141ffcea14d" />


---

## 🔗 Frontend–Backend Connection Flow

- React UI
- ↓ (Axios POST request)
- Express API
- ↓ (Mongoose)
- MongoDB Database


When a user submits a rating:
1. React sends a POST request to the backend
2. Express receives and processes the request
3. Mongoose saves the rating in MongoDB
4. Data is visible in MongoDB Compass

---

## ▶️ How to Run the Project

### Backend
- cd backend
- npm install
- npm start
- Runs on: http://localhost:5000

### Frontend
- cd frontend
- npm install
- npm run dev
- Runs on: http://localhost:5173



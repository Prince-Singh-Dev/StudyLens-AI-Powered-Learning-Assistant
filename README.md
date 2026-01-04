# 📚 StudyLens — AI-Powered Learning Assistant

StudyLens is a full-stack AI-powered learning assistant that helps students understand, summarize, and interact with their study documents using modern web technologies and generative AI.

It allows users to upload PDFs, read them inside the app, and use AI to ask questions, generate summaries, flashcards, and quizzes — all from their own documents.

# 🚀 Features

# 🔐 Authentication & User Management

Secure user signup and login using JWT
Profile management (update profile & change password)
Protected routes for authenticated users

# 📄 PDF Upload & Management

Upload and manage study PDFs
File size validation and tracking
Organized document dashboard
Embedded PDF viewer (read without leaving the app)

# 🤖 AI-Powered Learning Tools (Google Gemini)

Context-aware chat: Ask questions based on uploaded PDFs
One-click document summary
Concept explanation from document content
Auto-generated flashcards with flip animation
AI quiz generator with configurable question count
Quiz result analysis with score breakdown and explanations

# 📊 Learning Dashboard

Track total documents, flashcards, and quizzes
Recent activity feed
Favorites system for important flashcards

# 🎨 UI & Experience

Fully responsive UI built with Tailwind CSS
Clean and modern dashboard layout
Smooth user interactions

# 🛠️ Tech Stack

# Frontend

React.js
Tailwind CSS
Axios
React Router

# Backend

Node.js
Express.js
MongoDB & Mongoose
JWT Authentication
Multer (file uploads)

# AI Integration

Google Gemini API

# Other Tools

PDF parsing utilities
RESTful API architecture

# 🧠 How StudyLens Works

User uploads a PDF document
PDF content is extracted and stored
AI features use extracted content as context
Gemini AI generates responses, summaries, flashcards, and quizzes
User progress and activity are stored in MongoDB

# 📁 Project Structure

StudyLens/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│
└── README.md

# ⚙️ Installation & Setup

1️⃣ Clone the repository
    git clone https://github.com/your-username/studylens.git
    cd studylens
2️⃣ Backend setup
    cd backend
    npm install
    npm run dev
Create a .env file:
    PORT=5000
    MONGO_URI=your_mongodb_connection
    JWT_SECRET=your_jwt_secret
    GEMINI_API_KEY=your_gemini_api_key
3️⃣ Frontend setup
    cd frontend
    npm install
    npm run dev

# 🌍 Deployment

Frontend: Vercel
Backend: Render 
Database: MongoDB Atlas

# 🎯 Why This Project?

StudyLens was built to:

Solve real student learning problems
Demonstrate full-stack MERN development
Integrate real-world AI capabilities
Practice clean architecture and scalable design

This project showcases authentication, file handling, AI integration, dashboard analytics, and responsive UI design — making it suitable for internships and entry-level software roles.

# 🔮 Future Improvements

Role-based access (student / educator)
Notes & highlights inside PDF viewer
AI-powered study plans
Cloud storage optimization
Collaborative document sharing

# 👨‍💻 Author

Prince Singh
Software Engineering Student | MERN Stack Developer

    




# 📚 StudyLens — AI-Powered Learning Assistant

StudyLens is a full-stack AI-powered learning assistant that helps students understand, summarize, and interact with their study documents using modern web technologies and generative AI...

It allows users to upload PDFs, read them inside the app, and use AI to ask questions, generate summaries, flashcards, and quizzes — all from their own documents.

# 🚀 Features

# 🔐 Authentication & User Management

Secure user signup and login using JWT <br>
Profile management (update profile & change password) <br>
Protected routes for authenticated users<br>

# 📄 PDF Upload & Management

Upload and manage study PDFs <br>
File size validation and tracking <br>
Organized document dashboard <br>
Embedded PDF viewer (read without leaving the app) <br>

# 🤖 AI-Powered Learning Tools (Google Gemini)

Context-aware chat: Ask questions based on uploaded PDFs <br>
One-click document summary <br>
Concept explanation from document content <br>
Auto-generated flashcards with flip animation <br>
AI quiz generator with configurable question count <br>
Quiz result analysis with score breakdown and explanations <br>

# 📊 Learning Dashboard

Track total documents, flashcards, and quizzes <br>
Recent activity feed <br>
Favorites system for important flashcards <br>

# 🎨 UI & Experience

Fully responsive UI built with Tailwind CSS <br>
Clean and modern dashboard layout <br>
Smooth user interactions <br>

# 🛠️ Tech Stack

# Frontend

React.js <br>
Tailwind CSS <br>
Axios <br>
React Router <br>

# Backend

Node.js <br>
Express.js <br>
MongoDB & Mongoose <br>
JWT Authentication <br>
Multer (file uploads) <br>

# AI Integration

Google Gemini API <br>

# Other Tools

PDF parsing utilities <br>
RESTful API architecture <br>

# 🧠 How StudyLens Works

User uploads a PDF document <br>
PDF content is extracted and stored <br>
AI features use extracted content as context <br>
Gemini AI generates responses, summaries, flashcards, and quizzes <br>
User progress and activity are stored in MongoDB <br>

# 📁 Project Structure

StudyLens/ <br>
├── backend/ <br>
│   ├── controllers/ <br>
│   ├── models/ <br>
│   ├── routes/ <br>
│   ├── middleware/ <br>
│   ├── utils/ <br>
│   └── server.js <br>
│ <br>
├── frontend/<br>
│   ├── src/ <br>
│   │   ├── components/ <br>
│   │   ├── pages/ <br>
│   │   ├── services/ <br>
│   │   └── App.jsx <br>
│ <br>
└── README.md <br>

# ⚙️ Installation & Setup

1️⃣ Clone the repository <br>
    
    git clone https://github.com/your-username/studylens.git <br>
    cd studylens<br>
    
2️⃣ Backend setup <br>

    cd backend<br>
    npm install <br>
    npm run dev <br>
    
Create a .env file: <br>

    PORT=5000 <br>
    MONGO_URI=your_mongodb_connection <br>
    JWT_SECRET=your_jwt_secret <br>
    GEMINI_API_KEY=your_gemini_api_key <br>
    
3️⃣ Frontend setup <br>

    cd frontend <br>
    npm install <br>
    npm run dev <br>
    

# 🌍 Deployment

Frontend: Vercel <br>
Backend: Render <br> 
Database: MongoDB Atlas <br>

# 🎯 Why This Project?

StudyLens was built to: <br>

Solve real student learning problems <br>
Demonstrate full-stack MERN development <br>
Integrate real-world AI capabilities <br>
Practice clean architecture and scalable design <br>

This project showcases authentication, file handling, AI integration, dashboard analytics, and responsive UI design — making it suitable for internships and entry-level software roles. <br>

# 🔮 Future Improvements

Role-based access (student / educator) <br>
Notes & highlights inside PDF viewer <br>
AI-powered study plans <br>
Cloud storage optimization <br>
Collaborative document sharing <br>

# 👨‍💻 Author

Prince Singh <br>
Software Engineering Student | MERN Stack Developer

    




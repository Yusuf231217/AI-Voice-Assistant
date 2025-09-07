# 🤖 AI VOICE Assistant Project

A sophisticated AI-powered virtual assistant application built with React frontend and Node.js backend, featuring voice recognition, natural language processing, and personalized AI interactions.

## ✨ Features

### 🎯 Core Functionality
- **Voice Recognition**: Real-time speech-to-text using Web Speech API
- **AI-Powered Responses**: Integration with Google Gemini AI for intelligent responses
- **Voice Synthesis**: Text-to-speech with Hindi language support
- **Personalized Assistant**: Customizable assistant name and avatar
- **Command Processing**: Smart command recognition for various actions

### 🔐 Authentication & Security
- **JWT-based Authentication**: Secure user sessions with HTTP-only cookies
- **Password Hashing**: bcrypt encryption for secure password storage
- **Protected Routes**: Middleware-based route protection
- **Session Management**: Automatic token validation and refresh

### 🎨 User Interface
- **Modern UI Design**: Sleek, futuristic interface with gradient backgrounds
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Smooth animations and hover effects
- **Customizable Themes**: Dark theme with cyan/blue accent colors

### 🛠️ Assistant Capabilities
- **Google Search**: Voice-activated web searches
- **YouTube Integration**: Search and play videos
- **Time & Date**: Current time, date, day, and month queries
- **App Launchers**: Open calculator, Instagram, Facebook
- **Weather Information**: Quick weather lookups
- **General Q&A**: AI-powered conversational responses

## 🏗️ Project Structure

```
virtualAssistant/
├── backend/                    # Node.js Backend
│   ├── config/                # Configuration files
│   │   ├── cloudinary.js      # Image upload service
│   │   ├── db.js             # Database connection
│   │   └── token.js          # JWT token generation
│   ├── controllers/           # Route controllers
│   │   ├── auth.controllers.js    # Authentication logic
│   │   └── user.controllers.js    # User management
│   ├── middlewares/           # Custom middlewares
│   │   ├── isAuth.js         # Authentication middleware
│   │   └── multer.js         # File upload handling
│   ├── models/               # Database models
│   │   └── user.model.js     # User schema
│   ├── routes/               # API routes
│   │   ├── auth.routes.js    # Authentication endpoints
│   │   └── user.routes.js    # User endpoints
│   ├── gemini.js            # AI integration
│   └── index.js             # Main server file
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   └── Card.jsx     # Image selection card
│   │   ├── context/         # React Context
│   │   │   └── UserContext.jsx  # Global state management
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx     # Main assistant interface
│   │   │   ├── SignIn.jsx   # Login page
│   │   │   ├── SignUp.jsx   # Registration page
│   │   │   ├── Customize.jsx    # Assistant image selection
│   │   │   └── Customize2.jsx   # Assistant name setup
│   │   ├── assets/          # Static assets
│   │   └── App.jsx          # Main app component
│   └── public/              # Public assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **Cloudinary Account** (for image storage)
- **Google Gemini API Key** (for AI responses)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/virtual-assistant.git
   cd virtual-assistant
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp env.example .env
   # Edit .env with your actual values
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the backend directory:

```env
# Database Configuration
MONGODB_URL=mongodb://localhost:27017/virtualassistant

# JWT Secret (generate a strong random string)
JWT_SECRET=your_super_secret_jwt_key_here

# Server Configuration
PORT=5000

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Gemini AI Configuration
GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=YOUR_API_KEY
```

## 🔧 API Endpoints

### Authentication Routes
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/logout` - User logout

### User Management Routes
- `GET /api/user/current` - Get current user profile
- `POST /api/user/update` - Update assistant settings
- `POST /api/user/asktoassistant` - Send command to AI assistant

## 🎯 How It Works

### 1. **User Registration & Setup**
- Users sign up with email and password
- Customize assistant with name and avatar
- Choose from predefined images or upload custom

### 2. **Voice Interaction**
- Continuous voice recognition listens for assistant name
- Commands are processed by Gemini AI
- Responses are spoken back using text-to-speech

### 3. **Command Processing**
The AI can handle various command types:
- **General Questions**: Conversational AI responses
- **Web Searches**: Google search integration
- **Media**: YouTube search and play
- **Utilities**: Calculator, weather, social media
- **Time/Date**: Current time and date information

### 4. **Smart Response System**
- Commands are categorized by intent
- Appropriate actions are triggered
- User history is stored for context

## 🛡️ Security Features

- **Environment Variables**: All sensitive data stored in `.env`
- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure session management
- **HTTP-Only Cookies**: XSS protection
- **Input Validation**: Server-side validation
- **CORS Configuration**: Controlled cross-origin requests

## 🎨 UI/UX Features

### Design Elements
- **Futuristic Theme**: Dark backgrounds with cyan/blue accents
- **Gradient Overlays**: Smooth color transitions
- **Animated Particles**: Floating background elements
- **Glowing Effects**: Neon-style borders and shadows
- **Responsive Grid**: Adaptive layout for all screen sizes

### Interactive Components
- **Voice Visualization**: Animated microphone states
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages
- **Mobile Menu**: Hamburger menu for mobile devices

## 🔄 State Management

- **React Context**: Global state management
- **User Data**: Authentication and profile information
- **Image Handling**: Frontend and backend image states
- **Voice States**: Recognition and synthesis states

## 📱 Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Web Speech API**: Required for voice features
- **HTTPS**: Required for microphone access in production

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure Cloudinary for image storage
3. Set up Gemini API credentials
4. Deploy to platforms like Heroku, Vercel, or AWS

### Frontend Deployment
1. Build the production version
2. Deploy to Netlify, Vercel, or similar
3. Update API endpoints for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for intelligent responses
- **Cloudinary** for image storage and processing
- **React** and **Node.js** communities
- **Tailwind CSS** for styling framework

---

**Built with ❤️ using React, Node.js, and AI technology**

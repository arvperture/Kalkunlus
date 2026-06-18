# Kalkunlus Frontend - Spotify Style

## 🎵 Project Overview
A modern, Spotify-inspired educational math platform with a dark theme and green accents. The interface features a three-column layout with sidebar navigation, main learning workspace, and AI tutor panel.

## 📁 Project Structure
```
frontend/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx          # Left navigation sidebar
│   │   ├── MainContent.jsx      # Center workspace with learning dashboard
│   │   └── RightPanel.jsx       # Right panel with AI tutor chat
│   ├── pages/
│   │   ├── LoginPage.jsx        # Authentication page
│   │   └── DashboardPage.jsx    # Main dashboard layout
│   ├── App.jsx                  # Main app routing
│   ├── index.css                # Global styles with Spotify theme
│   └── main.jsx                 # React entry point
├── public/
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind CSS configuration with Spotify colors
├── vite.config.js               # Vite build configuration
└── index.html                   # HTML entry point
```

## 🎨 Design Features
- **Color Scheme**: Spotify dark theme (#121212 bg) with green accent (#1DB954)
- **Layout**: Three-column responsive design
- **Components**: 
  - Sidebar with navigation
  - Dashboard with streak tracker, daily topics, and active quizzes
  - AI tutor with live chat and voice input capability
  - Mode toggle for Study Buddy vs Private Tutor

## 🚀 Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation Steps
1. Navigate to frontend directory:
```bash
cd code/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open browser and navigate to:
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview
```

## 📦 Dependencies
- **React** (v18.2.0) - UI framework
- **React Router** (v6.22.3) - Client-side routing
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework
- **Lucide React** (v0.363.0) - Icon library
- **Vite** (v5.2.0) - Build tool

## 🎯 Features Implemented

### LoginPage
- Email/password authentication form
- "Remember me" checkbox
- Forgot password link
- Sign up redirect
- Spotify-style dark theme with green accent button

### DashboardPage (Three-Column Layout)
#### Left Sidebar
- Logo with gradient icon
- Navigation menu (Home, Algebra, Calculus, Geometry, Statistics)
- User profile section with logout
- Responsive scrolling

#### Center Content
- Welcome greeting with streak indicator
- Tab navigation (Today's Challenges / Progress)
- Streak card with visual indicator
- Daily topics list with status indicators
- Active quizzes with progress bars
- Progress statistics (weekly view, metrics)

#### Right Panel (AI Tutor)
- Live chat interface
- Voice input toggle
- Message history
- Live Talk mode selector (Study Buddy / Private Tutor)
- Mode description based on selection

## 🎮 Usage

### Login
1. Click on login page
2. Enter any email and password
3. Click "Sign In" to proceed to dashboard

### Dashboard Navigation
- Click sidebar items to navigate topics
- Toggle Live Talk mode in right panel
- Click "Voice Input" to enable audio mode
- Send messages in the chat input box

### Tabs
- **Today's Challenges**: View daily topics and active quizzes
- **Progress**: View weekly statistics and metrics

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify Spotify theme colors:
```javascript
'spotify-green': '#1DB954',
'spotify-bg': '#121212',
```

### Navigation Items
Modify `src/components/Sidebar.jsx` navItems array to add/remove topics

### Chat Messages
Update `src/components/RightPanel.jsx` messages state to change AI responses

## 📝 Notes
- The Live Talk toggle is fully functional with mode descriptions
- Voice input button changes state visually
- Progress bars animate smoothly
- Responsive hover effects on all interactive elements
- Custom scrollbar styling matches Spotify theme

## 🔗 API Integration (Next Steps)
Ready to connect to:
- Laravel backend for authentication and user data
- FastAPI backend for AI responses and mathematical computations
- MySQL database via Laravel ORM

## 📄 License
Part of Kalkunlus Educational Platform

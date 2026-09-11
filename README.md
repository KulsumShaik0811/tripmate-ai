# ✈️ TripMate AI

TripMate AI is a frontend-focused AI travel planning web application that helps students and young travelers quickly plan budget-friendly trips.

Instead of manually searching for destinations, activities, and budgets, users can enter their preferences and receive a personalized day-by-day travel itinerary.

---

## 🌐 Live Demo

**Deployed Application:**

https://tripmate-ai-ten.vercel.app/

**GitHub Repository:**

https://github.com/KulsumShaik0811/tripmate-ai

---

## 🎯 Problem Statement

Planning a trip can be time-consuming because travelers need to search for destinations, activities, food options, transportation, and estimated costs separately.

TripMate AI brings these elements together into a simple travel planning experience.

---

## 💡 Solution

TripMate AI allows users to:

- Choose a destination
- Select trip duration
- Set a travel budget
- Choose a travel style
- Generate a personalized itinerary
- Explore popular destinations
- Save trips for later
- View saved trips
- Delete saved trips
- Switch between Light and Dark mode

The application is designed with a simple and responsive interface so users can plan trips quickly.

---

## 👥 Target Users

TripMate AI is primarily designed for:

- Students
- Young travelers
- Budget travelers
- People planning short trips
- Users who want a quick itinerary without complicated planning

---

## ✨ Features

### 🧳 Personalized Trip Planner

Users can enter:

- Destination
- Number of days
- Budget
- Travel style

Available travel styles include:

- 🌴 Relaxation
- 🏔️ Adventure
- 🏛️ Culture
- 🍴 Food

---

### 🤖 AI-Style Itinerary Generation

The application generates a personalized day-by-day itinerary based on the user's:

- Destination
- Trip duration
- Budget
- Travel style

The frontend communicates with a mocked API using Mock Service Worker (MSW).

> Note: The current hackathon version uses a mocked itinerary API rather than a live Gemini/OpenAI API.

---

### 🌍 Explore Destinations

Users can browse available destinations and search for a destination by:

- Destination name
- Country
- Description

If no destination matches the search, an empty state is displayed.

---

### 💰 Budget Planning

The itinerary includes an estimated budget breakdown for:

- Activities
- Food
- Transportation

The application also shows the estimated total and remaining/over-budget amount.

---

### 💾 Saved Trips

Users can save generated trips.

Saved trips are stored using browser `localStorage`, so they remain available after refreshing the page.

Users can also delete saved trips.

---


### 📱 Responsive Design

The application is designed to work across different screen sizes, including mobile screens.

The interface is tested at approximately 375px width to ensure:

- No horizontal scrolling
- No overlapping elements
- Usable navigation
- Readable content
- Responsive cards and forms

---

### 🛡️ Form Validation

The planner validates:

- Empty destination
- Unsupported destination
- Invalid trip duration
- Invalid budget

Users receive inline error messages instead of the application failing.

---

### ⚠️ Error & Empty States

The application includes:

- Loading state
- Error state
- Empty search state
- Empty saved-trips state
- Form validation messages

This helps prevent blank screens and confusing user experiences.

---

### 🔒 Duplicate Submission Prevention

The Generate Trip button is disabled while a trip is being generated to prevent duplicate requests from double-clicking.

---

## 🛠️ Technology Stack

### Frontend

- React
- JavaScript
- HTML5
- CSS3
- Vite

### UI

- Lucide React Icons
- Responsive CSS
- CSS transitions and hover states

### Data & State

- React state
- localStorage
- Mock Service Worker (MSW)

### API Mocking

- Mock Service Worker (MSW)

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Vercel
- Git Bash

---

## 🤖 AI Tools Used

AI tools were used during development to assist with ideation, UI design, debugging, code generation, and documentation.

### ChatGPT

Used for:

- Project ideation
- Feature planning
- Frontend architecture suggestions
- React component development
- JavaScript debugging
- CSS improvements
- Form validation
- Error-state implementation
- Responsive design suggestions
- MSW integration guidance
- Git and deployment guidance
- README documentation

ChatGPT was also used to help identify and fix frontend issues during development.

### AI Image Generation

AI image generation was used to create visual assets for destination cards and travel-related UI elements.

The generated destination visuals were incorporated into the application's local assets.

---

## 🏗️ Project Architecture

The main application flow is:

User Input
↓
Trip Planner Form
↓
React State
↓
POST /api/itinerary
↓
Mock Service Worker (MSW)
↓
Itinerary JSON Response
↓
Itinerary Page
↓
Save Trip
↓
localStorage

---

## 📂 Project Structure

```text
tripmate-ai/
│
├── public/
│   └── mockServiceWorker.js
│
├── src/
│   │
│   ├── assets/
│   │   └── destinations/
│   │       ├── amsterdam.jpg
│   │       ├── bali.jpg
│   │       ├── bangkok.jpg
│   │       ├── barcelona.jpg
│   │       ├── bengaluru.jpg
│   │       ├── cairo.jpg
│   │       ├── darjeeling.jpg
│   │       ├── delhi.jpg
│   │       ├── dubai.jpg
│   │       ├── goa.jpg
│   │       └── ...
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── TravelStyle.jsx
│   │   ├── TripForm.jsx
│   │   ├── ItineraryCard.jsx
│   │   ├── BudgetSummary.jsx
│   │   ├── LoadingState.jsx
│   │   └── ErrorState.jsx
│   │
│   ├── data/
│   │   └── travelData.js
│   │
│   ├── hooks/
│   │   └── useLocalStorage.js
│   │
│   ├── mocks/
│   │   ├── browser.js
│   │   └── handlers.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Itinerary.jsx
│   │   └── SavedTrips.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
# Mobile Shopping App

A modern React Native mobile application built with Expo Router for a seamless shopping experience.

## Features

- 🔐 **Authentication System**
  - Sign In/Sign Up functionality
  - Google Sign-In integration
  - Protected routes and authentication state management

- 🏠 **Home Screen**
  - Category filtering
  - Product search functionality
  - Dynamic product grid display
  - Category selection with visual feedback

- ❤️ **Favorites System**
  - Save favorite products
  - Quick access to saved items
  - Detailed product view from favorites

- 👤 **User Profile**
  - Personal information management
  - Settings and preferences

- 🛍️ **Product Details**
  - Detailed product information
  - Image carousel
  - Contact seller functionality
  - Direct phone and email integration

## Tech Stack

- React Native
- Expo Router for navigation
- TypeScript for type safety
- Expo Vector Icons
- React Native Reanimated
- React Native Safe Area Context

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# For iOS
npm run ios

# For Android
npm run android

# For web
npm run web
```

## Project Structure

```
app/
├── (app)/             # Protected app routes
│   ├── (tabs)/       # Tab navigation
│   └── _layout.tsx   # App layout configuration
├── (auth)/           # Authentication routes
│   ├── signin.tsx
│   ├── signup.tsx
│   └── _layout.tsx
├── components/       # Reusable components
└── utils/           # Utility functions and constants
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
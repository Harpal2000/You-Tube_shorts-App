# YouTube Shorts-like App

This is a single-page application that mimics the basic functionality of YouTube Shorts. It allows users to view short videos with autoplay and pause functionality. The app is built using React.js and is designed to be responsive, working well on both mobile and desktop devices.

# Getting Started

# Prerequisites

- Node.js and npm installed on your machine.

# Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/youtube-shorts-app.git
cd youtube-shorts-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will be running at http://localhost:3000.

# Features

- Autoplay videos when they are in view.

- Pause videos when they are not in view.

- Swipe up/down navigation for mobile devices.

- Arrow key navigation for desktop devices.

- Responsive design for a seamless experience on different devices.

- Basic UI elements, including play/pause button, video progress indicator, and video title.

# Dependencies

### React (https://reactjs.org/):

- React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.

### React Player (https://www.npmjs.com/package/react-player):

- React Player is a React component for playing media (audio and video) from various sources. In this app, it is used to embed and control the playback of short videos.

### Lodash (debounce) (https://lodash.com/docs/4.17.15#debounce):

- Lodash is a JavaScript utility library that provides helpful functions for common programming tasks. In this case, the debounce function from Lodash is used to limit the frequency of the handleScroll function calls. It ensures that the video visibility check is not performed too frequently during scrolling, optimizing performance.

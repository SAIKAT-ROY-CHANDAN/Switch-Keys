# Switchkeys

Switchkeys is a sophisticated and dynamic website dedicated to mechanical keyboards. Whether you are a casual typist, a gamer, or a mechanical keyboard enthusiast, Switchkeys provides an extensive range of features to explore and customize your mechanical keyboard experience. From detailed product descriptions, user reviews, and ratings to interactive selection tools and comparison features, Switchkeys aims to be the ultimate online destination for mechanical keyboard enthusiasts.

## Technologies Used

Switchkeys is built using a modern web development stack to ensure high performance, scalability, and an engaging user experience:

### Frontend
- **React**: The core library for building user interfaces.
- **React-DOM**: For rendering React components in the DOM.
- **React-Router-Dom**: For handling client-side routing.
- **Framer-Motion**: For creating smooth animations.
- **TailwindCSS**: For utility-first CSS styling.
- **Lucide-React & React-Icons**: For including a wide variety of icons.
- **Radix-UI Components**: For accessible, unstyled components like alert dialogs, labels, sliders, etc.

### State Management
- **Redux Toolkit**: For managing the global state.
- **React-Redux**: For integrating Redux with React.

### Form Management
- **React-Hook-Form**: For managing form state and validation.
- **@hookform/resolvers**: For integrating form validation with external validation libraries like Zod.

### Utilities
- **Lodash.debounce**: For debouncing functions.
- **Clsx & Class-Variance-Authority**: For managing conditional class names.
- **Zod**: For schema validation.

### Dev Tools
- **TypeScript**: For static type checking.
- **ESLint**: For maintaining code quality.
- **Vite**: For fast and optimized building and development.
- **PostCSS & Autoprefixer**: For processing CSS and ensuring cross-browser compatibility.

## Installation Guide

To run the Switchkeys project locally, follow these steps:

### Clone the Repository
```sh
git clone https://github.com/your-username/switchkeys.git
cd switchkeys
```

### Install Dependencies
Ensure you have Node.js and npm installed. Then, install the project's dependencies:

```sh
npm install
```
### Run the Development Server
Start the Vite development server to run the project locally:

```sh
Copy code
npm run dev
```
The development server will start, and you can view the website in your browser at http://localhost:3000.
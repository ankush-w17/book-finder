# Full-Stack Demo Application

This is a full-stack demo application built with React and JSON Server. It demonstrates a simple admin dashboard with user and product management capabilities.

## Features

- Display users and products in a tabulated format
- Add new users through a form
- Switch between users and products views
- RESTful API endpoints for CRUD operations

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: JSON Server + Express
- Styling: Tailwind CSS
- Icons: Lucide React
- HTTP Client: Axios

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the backend server:
   ```bash
   npm run server
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- GET `/api/users` - Fetch all users
- POST `/api/users` - Create a new user
- GET `/api/products` - Fetch all products
- POST `/api/products` - Create a new product

## Production Considerations

In a production environment, you would need to:

1. Replace JSON Server with a proper database (e.g., PostgreSQL, MongoDB)
2. Implement proper authentication and authorization
3. Add input validation and sanitization
4. Set up proper error handling and logging
5. Configure CORS for production domains
6. Set up environment variables for sensitive data
7. Implement proper security measures (HTTPS, rate limiting, etc.)
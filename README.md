# BookStore

Welcome to the BookStore project, a full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This project provides a platform where users can browse and download books, featuring functionalities such as user authentication, a carousel for featured books, and a modal for login and register.

## Table of Contents

- [Features](#features)
- [Video Demo](#video-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Features

- **User Authentication**: Register and login functionality for users.
- **Book Carousel**: A carousel showcasing featured books using React Slick.
- **Modal**: For Login and Registration.
- **Responsive Design**: Mobile-friendly and responsive layout.

## Video Demo

[![Watch the video]](https://github.com/user-attachments/assets/9c61eef8-fcb8-48aa-8fc5-01cad989e37d)

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Dharshansk16/Book-Store.git
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install 
    ```

3. Create a `.env` file in the `backend` directory and add the following variables:

    ```env
    MONGO_DB_URI=your_mongodb_uri
    PORT=your_port_number
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install 
    ```

2. Start the frontend server:

    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Register a new user account or login with existing credentials.
3. Browse the books using the carousel.





## Technologies Used

- **Frontend**: React, React Router, React Slick, DaisyUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB



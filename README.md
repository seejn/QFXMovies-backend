# QFXMovies-Backend
QFXMovies-backend is a robust backend API built using Node.js with Express, MongoDB for database, designed to support a movie booking platform by managing movies, theaters, and user bookings through CRUD operations and role-based access controls.
## Setup

### Clone the Repository
```
git clone https://github.com/seejn/QFXMovies-backend.git
```
### Install required packages
```
cd QFXMovies-backend
npm i
```
### Create .env
set required env variables
```
cp .env.sample .env
```

### Seed Database [OPTIONAL]
```
node src/seed/seed.js
```
### Run Server
```
npm run dev
```

## ER Diagram
![ER Diagram](https://github.com/user-attachments/assets/9b2fa8af-cfdd-47d4-9e5c-d267b7490239)

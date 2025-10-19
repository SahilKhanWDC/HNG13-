# HNG13 - task0 /me endpoint

## setup instructions
- git clone [https://github.com/your-username/your-repo-name.git]
- cd your-repo-name

## install dependencies
- npm install

## create a .env file
- cp .env.example

## start the server
- npm start

## api endpoints
### example request
- GET http://localhost:3000/me
### example response
```json
{
  "status": "success",
  "user": {
    "email": "your-email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T17:45:12.531Z",
  "fact": "Cats sleep for 70% of their lives."
}
```
## Tech stack
- Node.js
- Express.js
- Axios
- CORS
- Dotenv

## screenshots
- code and running server
![App Screenshot](./assets/Screenshot%202025-10-17%20233141.png)

- endpoint testing in ThunderClient
![App Screenshot](./assets/Screenshot%202025-10-17%20233156.png)

- endpoint testing in production
![App Screenshot](./assets/Screenshot%202025-10-17%20233156.png)



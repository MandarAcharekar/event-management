# Event Management Backend

This is the backend system for a virtual event management platform. It provides RESTful APIs for user registration, authentication, event scheduling, and participant management.

## API Endpoints

### User Authentication 

#### 1. Register a New User
- Endpoint: POST `/api/auth/register`
- Description: Registers a new user.
- Request Body:
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```
- Response:
```json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

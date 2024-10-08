# Event Management Backend

This is the backend system for a virtual event management platform. It provides RESTful APIs for user registration, authentication, event scheduling, and participant management.

## API Endpoints

### User Authentication 

#### 1. Register a New User
- Endpoint: `POST` `/api/auth/register`
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

#### 2. Login a User
- Endpoint: `POST` `/api/auth/login`
- Description: Logs in a user and returns a JWT token.
- Request Body:
```json
{
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```
- Response:
```json
{
    "token": "jwt-token"
}
```

### Event(s) CRUD operation

#### 1. Create an Event
- Endpoint: `POST` `/api/events`
- Description: Creates a new event.
- Request Headers:
```json
Authorization: Bearer <jwt-token>
```
- Request Body:
```json
{
    "date": "2024-09-01",
    "time": "14:00",
    "description": "Tech Conference"
}
```
- Response:
```json
{
    "message": "Event created",
    "event": {
        "id": 1,
        "date": "2024-09-01",
        "time": "14:00",
        "description": "Tech Conference",
        "participants": []
    }
}
```
#### 2. Get All Events
- Endpoint: `GET` `/api/events`
- Description: Retrieves all events.
- Request Headers:
```json
Authorization: Bearer <jwt-token>
```
- Response:
```json
[
    {
        "id": 1,
        "date": "2024-09-01",
        "time": "14:00",
        "description": "Tech Conference",
        "participants": []
    }
]
```

#### 3. Update an Event
- Endpoint: `PUT` `/api/events/:id`
- Description: Updates an event by its ID.
- Request Headers:
```json
Authorization: Bearer <jwt-token>
```
- Request Body:
```json
{
    "date": "2024-09-02",
    "time": "15:00",
    "description": "Updated Tech Conference"
}
```
- Response:
```json
{
    "message": "Event updated",
    "event": {
        "id": 1,
        "date": "2024-09-02",
        "time": "15:00",
        "description": "Updated Tech Conference",
        "participants": []
    }
}
```

#### 4. Delete an Event
- Endpoint: `DELETE` `/api/events/:id`
- Description: Deletes an event by its ID.
- Request Headers:
```json
Authorization: Bearer <jwt-token>
```
- Response:
```json
{
    "message": "Event deleted"
}
```
### Participant Management

#### 1. Register for an Event
- Endpoint: `POST` `/api/events/:id/register`
- Description: Registers the authenticated user for the event.
- Request Headers:
```json
Authorization: Bearer <jwt-token>
```
- Response:
```json
{
    "message": "User registered for event",
    "event": {
        "id": 1,
        "date": "2024-09-01",
        "time": "14:00",
        "description": "Tech Conference",
        "participants": [1]
    }
}
```

## Email Notifications

#### Email notifications are sent in the following scenarios:
- User Registration: When a user registers, they receive a welcome email.
- Event Registration: When a user registers for an event, they receive a confirmation email.
- Make sure to set up the correct SMTP credentials in the .env file to enable email functionality.

## Error Handling
#### The API uses consistent error handling with appropriate HTTP status codes:

- 400 Bad Request: When the client provides invalid data.
- 401 Unauthorized: When the user is not authenticated.
- 403 Forbidden: When the user tries to access resources they are not authorized for.
- 404 Not Found: When the requested resource does not exist.

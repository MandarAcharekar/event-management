const express = require('express');
const {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent,
    registerForEvent
} = require('../controllers/eventController');

const router = express.Router();

router.get('/', getEvents); // Get all events
router.post('/', createEvent); // Create a new event
router.put('/:id', updateEvent); // Update an event by ID
router.delete('/:id', deleteEvent); // Delete an event by ID
router.post('/:id/register', registerForEvent); // Register for an event by ID

module.exports = router;

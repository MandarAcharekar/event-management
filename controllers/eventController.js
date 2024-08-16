const { events } = require('../models/Event');

// Create Event
const createEvent = (req, res) => {
    const { date, time, description } = req.body;

    const newEvent = { id: events.length + 1, date, time, description, participants: [] };
    events.push(newEvent);

    res.status(201).json({ message: 'Event created', event: newEvent });
};

// Get All Events
const getEvents = (req, res) => {
    res.json(events);
};

// Update Event
const updateEvent = (req, res) => {
    const { id } = req.params;
    const { date, time, description } = req.body;

    const event = events.find(event => event.id === parseInt(id));
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Update event details
    event.date = date || event.date;
    event.time = time || event.time;
    event.description = description || event.description;

    res.json({ message: 'Event updated', event });
};

// Delete Event
const deleteEvent = (req, res) => {
    const { id } = req.params;

    const eventIndex = events.findIndex(event => event.id === parseInt(id));
    if (eventIndex === -1) return res.status(404).json({ message: 'Event not found' });

    events.splice(eventIndex, 1);
    res.json({ message: 'Event deleted' });
};

// Register for Event
const registerForEvent = (req, res) => {
    const { id } = req.params;
    const userId = req.user.id; // Assuming req.user is populated by authMiddleware

    const event = events.find(event => event.id === parseInt(id));
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Check if user is already registered
    if (event.participants.includes(userId)) {
        return res.status(400).json({ message: 'User already registered for this event' });
    }

    // Add user to participants list
    event.participants.push(userId);
    res.json({ message: 'User registered for event', event });
};

module.exports = {
    createEvent,
    getEvents,
    updateEvent,
    deleteEvent,
    registerForEvent
};

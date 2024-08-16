const { events } = require('../models/Event');

const createEvent = (req, res) => {
    const { date, time, description } = req.body;

    const newEvent = { id: events.length + 1, date, time, description, participants: [] };
    events.push(newEvent);

    res.status(201).json({ message: 'Event created', event: newEvent });
};

module.exports = { createEvent };

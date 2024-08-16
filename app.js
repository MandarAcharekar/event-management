const express = require('express');
const authRoutes = require('./routes/authRoute');
const eventRoutes = require('./routes/eventRoute');
const { protect } = require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', protect, eventRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const jwt = require('jsonwebtoken');
const { users } = require('../models/user');

const protect = (req, res, next) => {
    let token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        token = token.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = users.find(user => user.id === decoded.id);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { protect };

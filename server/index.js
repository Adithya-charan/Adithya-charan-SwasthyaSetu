const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/virtual-medical')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('Virtual Medical System API Running');
});

// Auth Routes (Placeholder)
app.post('/api/auth/login', (req, res) => {
    // Implement JWT login
    res.json({ token: 'mock-jwt-token', user: { id: '1', role: 'patient' } });
});

// Start Server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// WebRTC Socket.io Setup
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    socket.emit("me", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded");
    });

    socket.on("callUser", (data) => {
        io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name });
    });

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal);
    });

    // Real-time Login Tracking
    socket.on("user_login", (userData) => {
        console.log("SERVER: Received user_login event:", userData);
        // Broadcast to all clients (Admin will filter/display this)
        io.emit("new_login", {
            ...userData,
            timestamp: new Date().toISOString(),
            socketId: socket.id
        });
        console.log("SERVER: Broadcasted new_login event");
    });
});

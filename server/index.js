import express from "express";
import cors from "cors";
import { ConnectDatabase } from "./Config/DB.js";
import foodrouter from "./Routes/FoodRoute.js";

const app = express();

// MongoDB Connection
ConnectDatabase();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
app.use('/api/food', foodrouter);
app.use('/images', express.static('Uploads'));

// Example route
app.get('/', (req, res) => {
    res.send('working');
});

// Start server
app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
});

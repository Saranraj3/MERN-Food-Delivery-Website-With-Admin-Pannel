import express from "express";
import 'dotenv/config';
import cors from "cors";
import { ConnectDatabase } from "./Config/DB.js";
import foodrouter from "./Routes/FoodRoute.js";
import router from "./Routes/UserRoute.js";

const app = express();

// MongoDB Connection
ConnectDatabase();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS

// Routes
app.use('/api',router);
app.use('/api/food', foodrouter);
app.use('/images', express.static('Uploads'));

// Example route
app.get('/', (req, res) => {
    res.send('working');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

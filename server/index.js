import express from "express";
import cors from "cors";
import { ConnectDatabase } from "./Config/DB.js";
import foodrouter from "./Routes/FoodRoute.js";
const app = express();

//MongoDB Connection
ConnectDatabase();

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});

//Routes
app.use('/api/food', foodrouter);



app.get('/', (req, res) => {
    res.send('working')
})

app.use(express.json());
app.use(cors());


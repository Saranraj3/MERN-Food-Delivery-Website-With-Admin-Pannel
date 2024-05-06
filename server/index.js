import express from "express";
import cors from "cors";
import { ConnectDatabase } from "./Config/DB.js";
const app = express();

//MongoDB Connection
ConnectDatabase();
const PORT = process.env.PORT || 5040;

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('working')
})

app.use(express.json());
app.use(cors());


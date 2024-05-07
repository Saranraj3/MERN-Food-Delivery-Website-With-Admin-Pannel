import express from 'express';
import { AddFood } from '../Controllers/FoodController.js';
import multer from 'multer';
const foodrouter = express.Router();

const storage = multer.diskStorage({
    destination: 'Uploads',
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

foodrouter.post('/add', upload.single('image'), AddFood);


export default foodrouter;

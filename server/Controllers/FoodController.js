import FoodModel from '../Models/FoodModel.js';
import fs from 'fs';

const AddFood = async (req, res) => {
    try {
        const image_filename = req.file.filename;
        if (!image_filename) {
            throw new Error('Image filename not provided');
        }
        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            throw new Error('Missing required fields');
        }

        const food = new FoodModel({
            name,
            description,
            price,
            image: image_filename,
            category
        });
        await food.save();
        res.status(201).json({ success: true, message: 'Food added successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
}

const FoodLists = async (req, res) => {
    try {
        const foods = await FoodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

const RemoveFood = async (req, res) => {
    try {
        const food = await FoodModel.findById(req.body.id);
        if (!food) {
            throw new Error('Food not found');
        }

        const imagePath = `Uploads/${food.image}`;
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error(err);
            }
        });

        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Food removed successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
}

export { AddFood, FoodLists, RemoveFood };

import FoodModel from '../Models/FoodModel.js';
import fs from 'fs';

const AddFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const Food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category

    })
    try {
        await Food.save();
        res.json({ success: true, message: 'Food Added' });
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Error' });
    }

}

export { AddFood };
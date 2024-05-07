import FoodModel from '../Models/FoodModel.js';
import fs from 'fs';


// Add Food Items

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

// All Food List

const FoodLists = async (req, res) => {

    try {
        const Food = await FoodModel.find({});
        res.json({ success: true, data: Food })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Error' });
    }
}

// Remove Food Item

const RemoveFood = async (req, res) => {

    try {
        const Food = await FoodModel.findById(req.body.id);
        fs.unlink(`Uploads/${Food.image}`, () => { })
        await FoodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'Food Removed' })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
}


export { AddFood, FoodLists, RemoveFood };
import mongoose, { Schema } from 'mongoose';

const UserShcema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    CartData: { type: Object, default: {} },
}, { minimize: false })

const UserModle = mongoose.model.User || mongoose.model('User', UserShcema);
export default UserModle;
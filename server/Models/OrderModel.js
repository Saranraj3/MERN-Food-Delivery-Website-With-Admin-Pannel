import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    items: { type: Array, require: true },
    amount: { type: Number, require: true },
    address: { type: object, require: true },
    status: { type: String, default: 'Food Processing' },
    date: { type: Date, default: Date.now() },
    userId: { type: Boolean, default: false },
})

const Ordermodel = mongoose.model.Order || mongoose.model('Order', OrderSchema);

export default Ordermodel;


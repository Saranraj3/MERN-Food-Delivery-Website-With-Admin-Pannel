import bcrypt from 'bcryptjs';
import UserModle from '../Models/UserModel.js';

async function UserSignupController(req, res) {

    try {
        const { name, email, password } = req.body
        const user = await UserModle.findOne({ email })

        if (user) {
            throw new Error('User Already Exists');
        }
        if (!name) {
            throw new Error('Enter Your Name');
        }
        if (!email) {
            throw new Error('Enter Your Email');
        }
        if (!password) {
            throw new Error('Enter Your Password');
        }

        const salt = bcrypt.genSaltSync(10);
        const HashPassword = await bcrypt.hashSync(password, salt);

        if (!HashPassword) {
            throw new Error('Something Went Wrong');
        }

        const payload = {
            ...req.body,
            password: HashPassword
        }

        const UserData = new UserModle(payload)
        const SaveUser = await UserData.save()

        res.status(201).json({
            data: SaveUser,
            success: true,
            error: false,
            message: 'Successfully Registerd'
        })

    } catch (error) {
        res.json({
            message: error.message || err,
            error: true,
            success: false
        })
    }
}

export default UserSignupController;
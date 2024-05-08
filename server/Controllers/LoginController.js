import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from '../Models/UserModel.js';

async function UserLoginController(req, res) {

    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('User Not Found')
        }
        if (!email) {
            throw new Error('Enter Your Email');
        }
        if (!password) {
            throw new Error('Enter Your Password');
        }
        const CheckPassword = await bcrypt.compare(password, user.password);
        console.log('checkpassword', CheckPassword);
        if (CheckPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email
            }
            const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            res.cookie('token', token, tokenOption).json({
                message: 'Login Successfully Created',
                data: token,
                success: true,
                error: false
            })
        } else {
            throw new Error('Check Your Password');
        }
    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false
        });
    };
};

export default UserLoginController;
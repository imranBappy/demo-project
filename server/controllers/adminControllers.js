const Auth = require("../models/Auth");
const bcrypt = require("bcrypt");
const sendEmail = require("../utils/sentEmail");


<<<<<<<<< Temporary merge branch 1
exports.signupController = async (req, res, next) => {
=========
exports.adminSignupPostController = async (req, res, next) => {
>>>>>>>>> Temporary merge branch 2
    try {
        let { name, email, password } = req.body;
        const url = req.file.filename;
        const user = await Auth.findOne({ email: email })
        if (user) {
            return res.status(223).json({ message: 'User Already Exist!' })
        }
        if (password.length < 6) return res.json({ message: 'Min length 6' });
        password = await bcrypt.hash(password, 10);
<<<<<<<<< Temporary merge branch 1
        const newUser = Auth({ name, url, email, roll: "Admin", password })
=========
        const newUser = new Auth({ name, url, email, role: "Admin", password })
>>>>>>>>> Temporary merge branch 2
        await newUser.save();
        sendEmail(email, name)
        res.json({
            message: 'Account successfully created!'
        })
    }
    catch (error) {
        next(error)
    }
}

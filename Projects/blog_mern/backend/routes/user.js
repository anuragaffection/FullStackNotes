import Express from "express";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import {User} from "../server.js";


const router = Express.Router();


router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'We are in home route',
        suman: 'Web Dev by Suman'
    })
})




router.post('/register', async (req, res) => {

    // destructuring , after  recieving from req.body 
    const { name, email, password } = req.body;


    let user = await User.findOne({ email });
    if (user) return res.status(404).json({
        success: false,
        message: "user already exist",
    })

    const hashPassword = await bcrypt.hash(password, 10);

    // updating password  with hashpassword 
    user = await User.create({
        name,
        email,
        password: hashPassword,
    });

    const token = Jwt.sign({ _id: user._id }, '!@#$%^&*()+')

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000
    }).json({
        success: true,
        message: "user Registered successfully",
        data: user
    })

})





router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({
        success: false,
        message: "user do not exist",
    });

    // user.password = comming from db 
    // password = comming from frontend website 
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid Credential"
        })
    }

    const token = Jwt.sign({ _id: user._id }, '!@#$%^&*()+')

    res.status(201).cookie("token", token, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000
    }).json({
        success: true,
        message: `${user.name} logined successfully`,
        data: user
    })

})


router.get('/logout', (req, res) => {
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now())
    }).json({
        success : true,
        message : "logout successfully"
    })
})


export default router;
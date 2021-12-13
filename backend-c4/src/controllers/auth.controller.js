const jwt = require("jsonwebtoken");


const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({ user: user}, process.env.ACCESS_KEY,);
}

const register = async (req, res) => {
    try{

        const user = await User.findOne({email: req.body.email}).lean().exac();
        
        if(user)
        return res.status(400).json({status: "failed", message: "Please Register with Different email",
        });
        user = await User.create(req.body);

        const token = newToken(user);

        res.status(201).send({user, token});
    } catch(e) {
        return res.status(500).json({status: "Error!", message: e.message});

    }
}

const login = async (req, res) => {
    try{

        const user = await User.findOne({email: req.body.email});
        
        if(!user)
        return res.status(400).json({status: "failed", message: "Please register then Login",
        });
       

        const match = await user.checkPassword(req.body.password);
        
        if(!match)
        return res.status(400).json({status: "failed", message: "Email or Password is incorrect",
        });
        const token = newToken(user);
        
        res.status(201).json({user, token});

    } catch(e) {
        return res.status(500).json({status: "Error!", message: e.message});

    }
};

module.exports= { register, login};
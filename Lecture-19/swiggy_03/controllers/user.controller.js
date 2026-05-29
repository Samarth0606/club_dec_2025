const UserModel = require("../models/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req,res){
    try{
        let {fullName,email,password} = req.body;
        let data = await UserModel.findOne({email})
        if(data){
            return res.status(409).json("user already exists")
        }else{
            let newUser = await UserModel.create({
                fullName,email,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json(newUser)
        }
    }
    catch(err){
        return res.status(500).json("error while registering user")
    }
}

async function login(req,res){
    try{
        let {email,password} = req.body;
        let data = await UserModel.findOne({email})
        if(!data){
            return res.status(409).json("user doesnot exists")
        }else{
            let validPassword = bcrypt.compareSync(password, data.password); // true
            if(!validPassword){
                return res.status(404).json("user credentials invalid")
            }
            // create token
            const token = jwt.sign({ id: data.id }, 'shhhhh');
            return res.status(200).json({
                user:{
                    email: data.email,
                    fullName: data.fullName
                },
                accesstoken: token
            })
        }
    }
    catch(err){
        return res.status(500).json("error while login user")
    }
}

module.exports = {register,login}


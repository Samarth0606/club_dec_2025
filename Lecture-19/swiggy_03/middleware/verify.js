const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');


const verify = (req,res,next)=>{
    if(
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT" 
    ){
        jwt.verify(
            req.headers.authorization.split(' ')[1], 
            'shhhhh', 
            async function(err, decoded) {
                if(err){
                    return res.status(409).json({message: "INVALID JET TOKEN"})
                }
                // console.log(decoded);
                let foundUser  = await UserModel.findById(decoded.id);
                req.user = foundUser;
                console.log(req);
                
                next();
        });
    }else{
        return res.status(404).json({message: "TOKEN not found"})
    }

}

module.exports = verify;
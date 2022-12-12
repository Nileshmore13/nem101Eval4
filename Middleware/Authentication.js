const jwt = require('jsonwebtoken');

const Authentication = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1];
    console.log('token: ', token);
    
    if(token){
        const decoded = jwt.verify(token, 'shhhhh');
        console.log('decoded: ', decoded);
        if(decoded.userID){
            req.body.userID = decoded.userID;
            next();
        }
        else{
            res.send({"msg":"wrong creadential"})
        }
    }
    else{
        res.send({"msg":"wrong creadential"})
    }
}

module.exports = { Authentication }
const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  try{
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
  
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
        console.log("error in middleware");
        return res.status(403).json("Token is not valid!"); 
      }else{
        req.user = user;
        next();
      }
        
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  }catch(e){
    console.log(e)
  }
 
}

module.exports = verify;

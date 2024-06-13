const jwt =require ('jsonwebtoken')
const SECRET = process.env.SECRET

const authenticate =(req,res,next)=>{
    console.log("Authenticate User before returning the response");
    jwt.verify(req.cookies.userToken, SECRET, (error ,payload)=>{
        if(error){
            console.log("User Not Allowed Ro Be Here");
            res.status(401).json({isVerified:false, error})
        }else{
            next()
        }
    })
}


module.exports= {authenticate}
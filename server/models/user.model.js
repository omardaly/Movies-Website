const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema(
    {
        userName:{
            type:String,
            required:[true,'User Name is important !!'],
            minlength:[3,"at least 3 letters ⛔⛔⛔"]
        },
        email:{
            type:String,
            required:[true,"Email must exist 🔥🔥🔥"],
            validate:{
                validator:val => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
                message :"Please ENTER A VALID EMAIL"
            }
        },
        password:{
            type:String,
            required:[true,"Password very required"],
            minlength:[6,"Password too short ⛔⛔⛔"]
        }
    }
)

    UserSchema.virtual('confirmPassword')
    .get(()=>this._confirmPassword)
    .set(value => this._confirmPassword = value);
    UserSchema.pre('validate',function(next){
        console.log("INSIDE VALIDATE");
        console.log(`PASSWORD:${this.password}\n CONFIRM Password ${this.confirmPassword}`);
        if(this.password != this.confirmPassword ){
            this.invalidate('confirmPassword','Password Must match')
        }
        next()
    })

    UserSchema.pre('save',async function(next){
        try{
            const hashedPassword = await bcrypt.hash(this.password,10)
            console.log(`PASSWORD TEXT:${this.password}\n HASHED PASSWORD:${hashedPassword}`);
            this.password = hashedPassword
        }
        catch(error){console.log(error)}
    })
    const User = mongoose.model('User',UserSchema);
    module.exports=User
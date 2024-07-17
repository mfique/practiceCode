const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://bedoloic:bedo123@bedo.e8uzahj.mongodb.net/')
.then(()=>{
    console.log("Mongo Db connected successfully");
})
.catch((err)=>{
    // console.log(err)
    console.log("Failed to connect to the database")
})

const UserSchema = {
    email : {
        type:String,
        required:true 
    },
    password:{
        type : String,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    phonenumber:{
        type: Number,
        required:true
    }
}

const collection = new mongoose.model('bedodb',UserSchema)

module.exports = collection;
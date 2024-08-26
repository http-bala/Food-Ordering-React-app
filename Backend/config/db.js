import mongoose from "mongoose";


 export const connectdb = async () =>{
    await mongoose.connect('mongodb+srv://balakrishnakolla00014:Bala7600@cluster0.nmdis.mongodb.net/food-delivery').then(()=>{
        console.log("db_conncted")
    })
}
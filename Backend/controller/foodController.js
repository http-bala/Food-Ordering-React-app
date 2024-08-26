import foodModel from "../models/foodModel.js";
import fs from 'fs';



// add food Items

const addFood = async(req,res)=>{

    let image_filename = `${req.file.filename}`
    
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category,
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch (err){
        console.log(err)
        res.json({success:false,message:"error"})
    }


}

// veiw foods list items 

const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"list food errror"})
    }
}

// remove foods list items 


const removeFood = async(req,res)=>{
    try {

        const foodItems = await foodModel.findById(req.body._id)
        fs.unlink(`uploads/${foodItems.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body._id);
        res.json({success:true,message:"food removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"list food errror"})
    }
}

export {addFood,listFood,removeFood}
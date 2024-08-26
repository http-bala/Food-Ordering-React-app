import mongoose from "mongoose";

const foodShecma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
  
});

const foodModel = mongoose.model.food || mongoose.model("food",foodShecma);

export default foodModel;

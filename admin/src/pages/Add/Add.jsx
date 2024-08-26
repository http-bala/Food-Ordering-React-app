import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";


const Add = () => {

    const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmitHanlder = async(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);

    const respone = await axios.post(`${url}/api/food/add`,formData);

    if(respone.data.success){
      setData({
        name: "",
        description: "",
        category: "Salad",
        price: "",
      });
      setImage(false);
      toast.success(respone.data.message)
    }else{
        toast.error(respone.data.message)
    }

  }

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHanlder}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            name="name"
            value={data.name}
            type="text"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-desc flex-col">
          <p>Product desc</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write Content Here"
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Category</p>
            <select name="category" onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="PureVeg">PureVeg</option>
              <option value="Pasta">Pasta</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Price</p>
            <input
              type="number"
              onChange={onChangeHandler}
              value={data.price}
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="Submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;

import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const List = () => {  

  const url = "http://localhost:4000";
  const [list,setList]=useState([]);

  const fetchlist = async()=>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);

    if(response.data.success){
      setList(response.data.data);
    }else{
        toast.error(response.data.message)
    }
  }

  const removeFood = async(foodId)=>{
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`,{_id:foodId});
    await fetchlist();
    if (response.data.success) {
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  useEffect(()=>{
    fetchlist();
  },[])


  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <div>
                <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
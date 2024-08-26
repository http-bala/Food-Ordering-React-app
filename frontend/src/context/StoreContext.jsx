import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItem, setcardItem] = useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = useState("")

  const addToCart = (itemid) => {
    if (!cardItem[itemid]) {
      setcardItem((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcardItem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removeFromCart = (itemid) => {
    if (cardItem[itemid] > 0) {
      setcardItem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmout = 0;

    for (const item in cardItem) {
      if (cardItem[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalAmout += iteminfo.price * cardItem[item];
      }
    }
    return totalAmout;
  };

  useEffect(()=>{
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
    }
  },[])

  const contextValue = {
    food_list,
    cardItem,
    setcardItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

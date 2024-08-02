import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cardItem, setcardItem] = useState({});

    const addToCart = (itemid) => {
        if (!cardItem[itemid]) {
            setcardItem((prev)=>({...prev,[itemid]:1}))
        }else{
            setcardItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removeFromCart = (itemid) => {
        if (cardItem[itemid] > 0) {
            setcardItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
        }
    }

    useEffect(()=>{
        console.log(cardItem)
    },[cardItem])




    const contextValue = {
        food_list,
        cardItem,
        setcardItem,
        addToCart,
        removeFromCart
        
    }
    return(
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
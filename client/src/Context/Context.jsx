import { createContext, useState } from "react";
import Food_List from "../Assets/FoodItems";

export const Context = createContext(null)

const ContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const AddToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const RemoveFromCart = (itemId) => {
        if (cartItems[itemId] > 0) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        }
    }

    const ContextValue = {
        Food_List,
        cartItems,
        setCartItems,
        AddToCart,
        RemoveFromCart,
    }
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const Context = createContext(null)
const url = 'http://localhost:5000'

const ContextProvider = (props) => {
    const [Food_List, setFoodList] = useState([])
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

    const fetchFoodList = async () => {
        const response = await axios.get(url +"/api/food/list");
        setFoodList(response.data.data)
    }
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
        }
        loadData()
    }, [])


    const ContextValue = {
        url,
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
import { createContext } from "react";
import Food_List from "../Assets/FoodItems";

export const Context = createContext(null)

const ContextProvider = (props) => {
    const ContextValue = {
        Food_List

    }
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
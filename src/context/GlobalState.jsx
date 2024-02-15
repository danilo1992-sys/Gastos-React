import { createContext, useContext, useReducer } from "react";
import Appreducer from "./Appreducer";

const intialState = {
    transactions: [],
}

export const Context = createContext();

export const useGlobalState = () =>{

    
    const context = useContext(Context)
    return context;
}
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, intialState);
    return <Context.Provider 
    value ={{
        transactions: state.transactions
    }}
>
    {children}
</Context.Provider>
    };
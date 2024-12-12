import { createContext, useState } from "react";
import run from "../Config/Polar";

export const context = createContext();

const ContextProvider = (props)=>{

    const[input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPrompts,setPrevPrompts] = useState("")
    const [showResult, setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    useState("")
    const [resultData,setResultData] = useState("")

    const onSent = async (prompt) =>{
       await run(input)
    }



    const contextValue ={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput


    }
    return (
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}

export default ContextProvider
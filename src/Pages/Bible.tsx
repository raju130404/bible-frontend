import { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import VersePicker from "../Components/VersePicker";
import { VersePickerContext, VersePickerProvider } from "../Contexts/versePickerContext";
import axios from "axios";
import { bookMappings } from "../Utils/booksMapping";

export default function Bible(){
    const {state,dispatch} = useContext(VersePickerContext)
    const [content,setContent] = useState([]) 

    // useEffect(()=>{
    //    (async ()=>{
    //         const response = (await axios.get(`http://localhost:8080/verses?book=${bookMappings[state.book]}&chapter=${state.chapter}`))
    //         setContent(response.data)
    //     })()
    // },[state.verse])

    const handleSubmitButtonClick = async()=>{
        const response = (await axios.get(`http://localhost:8080/verses?book=${bookMappings[state.book]}&chapter=${state.chapter}`))
        setContent(response.data)
    }

    return(
        <>
            <h1 className="text-8xl">Bible</h1>
            <div className="flex flex-row"><VersePicker/><button onClick={handleSubmitButtonClick}>Send</button></div>
            <h1>{state.book} {state.chapter} {state.verse}</h1>
            {content.map(element => {
                return <div><span><h1 className="inline text-xl">{element['verse']}</h1></span> {element['text']}</div>
            })}
            <Footer/>
        </>
    )
}
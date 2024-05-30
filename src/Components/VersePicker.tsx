import { useContext, useEffect, useState } from "react";
import { bookMappings, chapterVerseCount } from "../Utils/booksMapping";
import { versePickerActions } from "../Reducers/versePickerReducer";
import { VersePickerContext } from "../Contexts/versePickerContext";

export default function VersePicker(){
    const books = Object.keys(bookMappings)
    const {state,dispatch} = useContext(VersePickerContext)
    const [book,setBook] = useState(state.book)
    const [chapter,setChapter] = useState(Number(state.chapter))
    const [verse,setVerse] = useState(0)
    const [chapterCount,setChapterCount] = useState(0)
    useEffect(()=>{setChapterCount(chapterVerseCount[book].chapters)},[book])
    useEffect(()=>{},[chapter])
    
    return(
        <div className="flex flex-row">
            <select name="book" id="book" value={state.book} onChange={(event)=>{
                dispatch({type:versePickerActions.CHANGE_BOOK,change:event.target.value})
                setBook(event.target.value)
            }}>
                {books.map(book=>
                    <option key = {book} value = {book} >{book}</option>
                )}
            </select>
            <select name="chapter" id="chapter" value={state.chapter} onChange={(event)=>{
                dispatch({type:versePickerActions.CHANGE_CHAPTER,change:event.target.value})
                setChapter(Number(event.target.value))
            }}>
                {Array.from({ length: chapterCount }, (_, index) => 
                    <option key={index+1} value={index+1}>{index+1}</option>
                )}
            </select>
            <select name="verse" id="verse" value={state.verse} onChange={(event)=>{
                dispatch({type:versePickerActions.CHANGE_VERSE,change:event.target.value})
                setVerse(Number(event.target.value))
            }}>
                {Array.from({ length: 100 }, (_, index) => 
                    <option key={index+1} value={index+1}>{index+1}</option>
                )}
            </select>
        </div>
    )
}
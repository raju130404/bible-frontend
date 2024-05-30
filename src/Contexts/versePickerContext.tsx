import { ReactNode, createContext, useReducer } from "react";
import { versePickerInitialState, versePickerReducer, verseState } from "../Reducers/versePickerReducer";

export const VersePickerContext= createContext<{
    state: verseState;
    dispatch: React.Dispatch<any>;
  }>({
    state: versePickerInitialState,
    dispatch: () => null
  });

export const VersePickerProvider = ({children}:{children:ReactNode}) => {
    const [state,dispatch] = useReducer(versePickerReducer,versePickerInitialState)

    return(
        <VersePickerContext.Provider value = {{state,dispatch}}>
            {children}
        </VersePickerContext.Provider>
    )
}
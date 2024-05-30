export interface verseState{
    book:string;
    chapter:string;
    verse:string
}

export interface verseAction{
    type:string;
    change:string
}

export const versePickerInitialState:verseState = {
    book:"Genesis",
    chapter:"1",
    verse:"1"
}

export const versePickerActions = {
    CHANGE_BOOK:'CHANGE_BOOK',
    CHANGE_CHAPTER:'CHANGE_CHAPTER',
    CHANGE_VERSE:'CHANGE_VERSE',
}

export function versePickerReducer(state:verseState,action:verseAction):verseState{
    switch(action.type){
        case versePickerActions.CHANGE_BOOK :{
            return{
                ...state,
                book:action.change
            }
        }
        case versePickerActions.CHANGE_CHAPTER :{
            return{
                ...state,
                chapter:action.change
            }
        }
        case versePickerActions.CHANGE_VERSE :{
            return{
                ...state,
                verse:action.change
            }
        }
        default: throw Error('error')
    }
}
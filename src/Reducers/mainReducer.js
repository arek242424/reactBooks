import {createSlice} from '@reduxjs/toolkit'
import {applicationState} from './../store/ApplicationState'

export const appStateReducerSlice = createSlice({
    name: 'appState',
    initialState: applicationState,
    reducers: {
        setContentMain: (state, action) => {
            state.contentMain = action.payload;
        },
        setSelectedBook: (state, action) =>{
            state.selectedBook = action.payload;
        },
        updateBooks: (state, action) => {            
            state.books = action.payload
        },
        removeBook: (state, action) =>{
            state.books = state.books.filter(book => book.id != action.payload.bookId)
        },
        addBook: (state, action) =>{
            state.books.push(action.payload.book)            
        },
        setSaveStatus: (state, action)=>{
            state.saveStatus = action.payload.saveStatus;
        },
        setAuthors: (state, action) => {
            state.authors = action.payload.authors;
        }
    },    
})

export const {setContentMain, setSelectedBook, updateBooks, addBook, setSaveStatus, setAuthors} = appStateReducerSlice.actions

export default appStateReducerSlice.reducer
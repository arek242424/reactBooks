import React, {useRef, useState, useEffect, useReducer} from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import BookEditInputs from './BookAddEditInputs'
import {useDispatch, useSelector} from 'react-redux'
import {actionCreator} from '../../Reducers/actionCreator'
import {editBook, addBook} from '../../Database/bookRepository'
import UseWaitingDotsAnimation from '../../CustomHooks/UseWaitingDotsAnimation'
import UseSavingStatus from '../../CustomHooks/UseSaveStatus'
import viewEnum from './../../Enums/viewEnum'
import {modeEnum} from './../../Enums/modeEnum'
import {saveStatusEnum} from './../../Enums/saveStatusEnum'
import {setSaveStatus} from './../../Reducers/mainReducer'
import {addRecordToHistoryThunk} from './../../Thunk/addRecordToHistoryThunk'
import {historyActionEnum} from './../../Enums/historyActionEnum'


const actions = {
    updateAuthorId: 'update/AuthorId',
    updateTitle: 'update/Title',
    updatePages: 'update/Pages'
}

const internalActionCreator = {
    updateAuthorIdAction: (payload) => {return {type: actions.updateAuthorId, payload: payload}},
    updateTitleAction: (payload) => {return {type: actions.updateTitle, payload: payload}},
    updatePagesAction: (payload) => {return {type: actions.updatePages, payload: payload}},
}

export default function BookAddEditPanel({book, mode}){

    const saveStatusValue = UseSavingStatus();    
    const savingExited = useRef(false)
    const [saveErrText, setSaveErrText] = useState("")
    const authors = useSelector(state => state.appState.authors)

    const dispatch = useDispatch()
    const [bookState, reducerDispatch] = useReducer((state, action) =>{
        switch (action.type) {
            case actions.updateAuthorId:
                return { ...state, authorId: action.payload }
            case actions.updateTitle:
                return { ...state, title: action.payload }
            case actions.updatePages:
                return { ...state, pages: action.payload }
        }
    }, book)

    const [dots, setStart] = UseWaitingDotsAnimation(5, 500);

    useEffect(()=>{
        if(saveStatusValue === saveStatusEnum.SAVING){
            setStart(true)
        }
        else{
            setStart(false)
        }     
        
        if(saveStatusValue != saveStatusEnum.FAILED){
            setSaveErrText("");
        }
        else{
            let operation = "";
            if(mode == modeEnum.EDIT){
                operation = "edited";                    
            }
            else{
                operation = "added";
            }
            setSaveErrText("Book was not " + operation)
        }
    },[saveStatusValue])

    useEffect(()=>{
        return () =>{
            dispatch(setSaveStatus({saveStatus: saveStatusEnum.NONE}))
            savingExited.current = true
        }
    },[])

    const onSave = async () =>
    {
        if(mode === modeEnum.EDIT){
            try{
                dispatch(setSaveStatus({saveStatus: saveStatusEnum.SAVING}))
                const resultStatus = await editBook(bookState);
                if(resultStatus === "ok"){                    
                }
                else{
                    console.tract("Editing book failed. Status: ", resultStatus)
                    return 
                }
                dispatch(setSaveStatus({saveStatus: saveStatusEnum.SAVED}))
            }catch(err){
                console.log('Error while editing book.', bookState, err)
                dispatch(setSaveStatus({saveStatus: saveStatusEnum.FAILED}))
                console.trace()
                return
            }

            dispatch(addRecordToHistoryThunk(historyActionEnum.BOOK_EDITED, bookState))

        }
        if(mode === modeEnum.ADD){
            dispatch(actionCreator.addBookAction(bookState))         
        }        
    }

    const getSavingStatusMessage = () => {
        let message = "";
        switch (saveStatusValue) {
            case saveStatusEnum.NONE:
                message = "";
                break;
            case saveStatusEnum.SAVED:
                message = "Book saved succesfully"
                break;
            case saveStatusEnum.SAVING:
                message = "Saving" + dots;
                break;
            case saveStatusEnum.FAILED:
                message = "";             
                break;
        }
        return message;
    }

    return (
        <Container sx={{width: '100%', border: 'groove', padding: '20px'}}>
            <BookEditInputs                 
                book={book} 
                bookEditDispatch={reducerDispatch} 
                internalActionCreator={internalActionCreator} 
                authors={authors}/>
            <Box>
                <Button onClick={()=> {onSave()}}>
                    {saveStatusValue === saveStatusEnum.FAILED ? 'Try again' : 'Save'}
                </Button>
                <Button onClick={() => {dispatch(actionCreator.setContentMainAction(viewEnum.BOOK_LIST_VIEW))}}>
                    BACK
                </Button>
            </Box>
            <Box component='span' sx={{color: 'green'}}>
                {getSavingStatusMessage()}{' '}<span style={{color: 'red'}}>{saveErrText}</span>
            </Box>

        </Container>
    )
}
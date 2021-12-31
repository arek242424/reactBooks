import React from 'react';
import Container from '@mui/material/Container';
import BookList from './BookList';
import {useSelector, useDispatch} from 'react-redux'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {actionCreator} from './../../Reducers/actionCreator'
import {bookModel} from './../../Models/bookModel'
import {modeEnum} from './../../Enums/modeEnum'
import viewEnum from './../../Enums/viewEnum'

export default function BookListPanel(){

    const books = useSelector((state)=> state.appState.books);
    const historyRecordMouseEntered = useSelector(state => state.historyState.historyRecordMouseEntered);
    const dispatch = useDispatch();

    function onAddBookClick(){
        const book = new bookModel();
        dispatch(actionCreator.setContentMainAction(viewEnum.ADD_EDIT_BOOK_VIEW, {book: book, mode: modeEnum.ADD}))
    }

    return (
        <Container>
            <Box sx={{margin: '20px'}}>
                <Button onClick={()=>{onAddBookClick()}} variant='outlined'>
                    ADD BOOK
                </Button>
            </Box>
            <BookList books={books} rawToHighlight={historyRecordMouseEntered}/>
        </Container>
    
    )
}


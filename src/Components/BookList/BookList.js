import React from 'react';
import {useBookList} from '../../CustomHooks/UseBookList';
import BookRaw from './BookRaw';
import {historyActionEnum} from './../../Enums/historyActionEnum'

export default function BookList({books, rawToHighlight}){
    
    function getEnableHighlight(bookId){
        return (rawToHighlight.historyAction === historyActionEnum.BOOK_EDITED 
                || rawToHighlight.historyAction === historyActionEnum.BOOK_ADDED)
            && bookId === rawToHighlight.id
    }

    return (
        <div>
            {books.map(b =>{  
                    const enableHighlight = getEnableHighlight(b.id)
                    return <BookRaw key={b.id} book={b} enableHighlight={enableHighlight}/>
                }
            )}
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import {getAllWithAuthors} from './../Database/bookRepository.js';

export const useBookList = () => {    
    const [bookList, setBookList] = useState([]);

    useEffect(()=>{        
        updateBookList();
    },[]);

    async function updateBookList(){
        let books =  await getAllWithAuthors();        
        setBookList(books);
    }

    return {bookList, updateBookList};
}
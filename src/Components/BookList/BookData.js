import React from 'react';
import Box from '@mui/material/Box';

export default function BookData(props){

    const book = props.book;

    return (       
            <Box sx={{fontSize: 25}}>
                {book.title} - {book.author.name}{' '}{book.author.surname} - {book.pages}
            </Box>
    )
}
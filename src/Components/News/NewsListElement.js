import React from 'react';
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material';

export default function NewListElement({newsHeader, setNewsId, clickEnable, isLoadMode}){

    function handleNewsClick() {
        if (clickEnable === true){
            setNewsId(newsHeader.id)
        }
    }


    return (
        <Box 
        onClick={()=>{handleNewsClick()}}
        sx={{
            width: '100%',
            height: '400px',
            border: 'groove',
            margin: '25px 0px 25px 0px',
            cursor:  isLoadMode === true ? 'progress' : 'pointer'
        }}>
            <Box sx={{display: 'flex', justifyContent: 'end', height: '50px'}}>date: {newsHeader.date}</Box>
            <Typography variant='h3'>{newsHeader.title}</Typography>
            <Typography variant='h5'>{newsHeader.subTitle}</Typography>
        </Box>
    )
}
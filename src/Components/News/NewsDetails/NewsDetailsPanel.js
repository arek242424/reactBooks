import React from 'react';
import NewsDetailsArticle from './NewsDetailsArticle'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ArrowBack from '@mui/icons-material/ArrowBack'

export default function NewsDetailsPanel({newsDetails, setNewsId}){


    return (
        <Box sx={{
            width: '100%',
            height: '100%'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'start'
            }}>
                <Button
                    onClick={()=>{setNewsId(undefined)}}
                    variant='contained'
                    endIcon={<ArrowBack/>}
                /> 
            </Box>
            <NewsDetailsArticle newsDetails={newsDetails}/>
        </Box>
    )
}
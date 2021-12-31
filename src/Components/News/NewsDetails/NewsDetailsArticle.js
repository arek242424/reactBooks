import React from 'react';
import { Box, Typography } from '@mui/material';


export default function NewsDetailsArticle({newsDetails}){


    return (
        <Box sx={{
            width: '100%',
            height: '100%'
        }}>
            <Box>Date: {newsDetails.date}</Box>
            <Typography variant='h3'>{newsDetails.title}</Typography>
            <Typography variant='h6'>{newsDetails.subTitle}</Typography>
            <Box sx={{
                margin: '70px 0px 0px 0px'
            }}>{newsDetails.content}</Box>
        </Box>
    )
}
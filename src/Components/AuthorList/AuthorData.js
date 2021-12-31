import React from 'react';
import { Box, Typography } from '@mui/material';


export default function AuthorData({authorData}){


    return (
        <Box>
            <Typography variant='h3'>
                {authorData.name}{' '}{authorData.surname}
            </Typography>
        </Box>
    )
}
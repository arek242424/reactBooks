import React from 'react';
import { ListItem } from '@mui/material';
import AuthorData from './AuthorData'
import Box from '@mui/material/Box'

export default function AuthorRaw({authorData}){


    return (
        <ListItem>
            <Box sx={{
                display: 'flex',
                justifyContent:'center',
                width: '100%'
            }}>
                <AuthorData authorData={authorData} />
            </Box>
        </ListItem>
    )
}
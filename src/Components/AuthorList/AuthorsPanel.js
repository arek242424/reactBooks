import React from 'react';
import { Box } from '@mui/material';
import AuthorList from './AuthorsList'
import {useSelector} from 'react-redux'

export default function AuthorsPanel(){

    const authorsList = useSelector(state => state.appState.authors)

    return (
        <Box>
            <AuthorList authorList={authorsList}/>
        </Box>

    )
}
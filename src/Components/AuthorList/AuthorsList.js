import React from 'react';
import { List } from '@mui/material';
import AuthorRaw from './AuthorRaw'


export default function AuthorList({authorList}){

    

    return (
        <List>
            {authorList.map(author =>{
                return <AuthorRaw authorData={author} />
            })}
        </List>

    )
}
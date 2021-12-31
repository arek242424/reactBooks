import React from 'react';
import Box from '@mui/material/Box'
import MainMenuButton from './../../Common/Buttons/MainMenuButton'
import PersonIcon from '@mui/icons-material/Person'
import BookIcon from '@mui/icons-material/Book'
import NewsIcon from '@mui/icons-material/Newspaper'
import { useDispatch } from 'react-redux';
import {actionCreator} from './../../Reducers/actionCreator'
import viewEnum from './../../Enums/viewEnum'

export default function MainMenuPanel(){

    const dispatch = useDispatch()

    function dispatchView(viewEnum){
        dispatch(actionCreator.setContentMainAction(viewEnum))
    }

    return (
        <Box sx={{
                width: '100%', 
                height: '100%',
                backgroundImage:'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,203,249,1) 80%, rgba(6,151,168,1) 100%);'                
            }} 
            border='groove'>
                <MainMenuButton matIcon={<NewsIcon/>} onClickButton={()=>{dispatchView(viewEnum.NEWS_VIEW)}}>
                    NEWS    
                </MainMenuButton>
                <MainMenuButton matIcon={<PersonIcon/>} onClickButton={()=>{dispatchView(viewEnum.AUTHORS_VIEW)}}>
                    AUTHORS                
                </MainMenuButton>
                <MainMenuButton matIcon={<BookIcon/>} onClickButton={()=>{dispatchView(viewEnum.BOOK_LIST_VIEW)}}>
                    BOOKS
                </MainMenuButton>                
        </Box>
    )
}
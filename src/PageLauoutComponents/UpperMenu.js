import React from 'react'
import Box from '@mui/material/Box'
import MainMenuPanel from './../Components/MainMenu/MainMenuPanel'

export default function UpperMenu(){


    return (
        <Box sx={{
            height: '60px', 
            margin: '5px'            
            }}>
                <MainMenuPanel />
        </Box>
            
    )
}
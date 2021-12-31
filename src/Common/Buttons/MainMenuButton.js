import React from 'react';
import { Button } from '@mui/material';


export default function MainMenuButton({children, matIcon, onClickButton}){

    return (
        <>
            <Button        
                onClick={onClickButton}          
                endIcon={matIcon}               
                color='secondary' 
                variant='outlined'
                size='large'                
                sx={{
                    height: 'inherit',
                    width: '20%',
                    margin:'0px 13px 0px 13px'
                }}>
                    {children}
                
            </Button>
        </>
    )

}
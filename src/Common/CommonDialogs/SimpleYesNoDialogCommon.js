import React, {useState} from 'react'
import { Dialog, Box, Button , DialogTitle, Container} from '@mui/material'


export default function SimpleYesNoDialogCommon({onAnyButtonClicked, open, dialogTitle, dialogQuestion}){

    function handleButtonClick(value){
        onAnyButtonClicked(value)         
    }

    return (
        <Dialog open={open}>
            <Container maxWidth='xs'>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <span>{dialogQuestion}</span>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button onClick={()=>handleButtonClick('yes')}>YES</Button>
                    <Button onClick={()=>handleButtonClick('no')}>Cancel</Button>
                </Box>
            </Container>
        </Dialog>

    )
}
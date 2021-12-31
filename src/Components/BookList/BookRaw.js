import React, {useState, useEffect} from 'react';
import BookData from './BookData';
import { Button} from '@mui/material';
import Box from '@mui/material/Box';
import {useDispatch} from 'react-redux'
import {actionCreator} from '../../Reducers/actionCreator'
import SimpleYesNoDialogCommon from './../../Common/CommonDialogs/SimpleYesNoDialogCommon'
import viewEnum from './../../Enums/viewEnum'
import {modeEnum} from './../../Enums/modeEnum'
export default function BookRaw({book, enableHighlight}){

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const [dialogValue, setDialogValue] = useState("")

    useEffect(()=>{
        if(dialogValue === "yes"){
            dispatch(actionCreator.removeBookAction(book.id))
        }

    }, [dialogValue]);

    function handleRemoveDialogClose(chosenValue){
        setOpen(false)
        setDialogValue(chosenValue)
    }

    return (              
            <Box border='ridge' sx={{display: 'flex', justifyContent: 'center', backgroundColor: enableHighlight ? 'gray' : ''}}>                               
                <BookData book={book}/>
                <Box>
                    <Button onClick={()=>dispatch(actionCreator.setContentMainAction(viewEnum.ADD_EDIT_BOOK_VIEW, {book: book, mode: modeEnum.EDIT}))}>
                        Edit
                    </Button>         
                    <Button onClick={()=>{setOpen(true)}}>
                        Delete
                    </Button>         
                </Box>
                <SimpleYesNoDialogCommon 
                    dialogTitle='Deleting' 
                    dialogQuestion={`Are you sure to delete '${book.title}'`}
                    open={open}                    
                    onAnyButtonClicked={(value)=> {handleRemoveDialogClose(value)}}/>                
            </Box>        
    )
}
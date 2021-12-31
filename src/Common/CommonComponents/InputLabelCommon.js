import React, {useRef, useState} from 'react'
import InputLabel from '@mui/material/InputLabel'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function InputLabelCommon({labelText, textValue, validator, errorTekst, dispatch, actionCreator}){
    
    const [inputError, setInputError] = useState(false);

    if(!validator){
        validator = (text) => {return true;}
    }

    function onUpdateText(text) {                
        if(validator(text)){
            setInputError(false);
            dispatch(actionCreator(text));
        }
        else{
            setInputError(true)
        }
    }
    
    return (
        <Box 
            className='book-add-edit-textbox'>
            <InputLabel>{labelText}</InputLabel>            
            <TextField 
                defaultValue={textValue}
                error={inputError}                
                onChange={(e) => {onUpdateText(e.currentTarget.value)}}/>                         
        </Box>

    )
}
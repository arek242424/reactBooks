import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete'
import Textfield from '@mui/material/TextField'

export default function AutoCompleteTextField({
    autocompleteOptions=[], 
    label='', 
    optionId=0,
    getOptionString=(option)=>'',
    onValueChange=(value)=>{}}
){

    const [chosenOptionId, setChosenOptionId] = useState(optionId)

    function getRenderInput(params){

        return <Textfield
             {...params}             
            label={label}/>
    }

    function onChange(e, value){
        setChosenOptionId(value.id);
        onValueChange(value);
    }

    console.log('rerender')
    return (
        <Autocomplete
            className='book-add-edit-textbox'
            disablePortal
            getOptionLabel={(option) => getOptionString(option)}
            options={autocompleteOptions}
            renderInput={params => getRenderInput(params)}
            value={autocompleteOptions.find(opt => opt.id === chosenOptionId)}
            onChange={onChange}
        />
    )
}


import React, {useRef} from 'react'
import InputLabelCommon from '../../Common/CommonComponents/InputLabelCommon'
import Container from '@mui/material/Container'
import AutoCompleteTextField from './../../Common/CommonComponents/AutoCompleteTextField'

export default function BookEditInputs({book, bookEditDispatch, internalActionCreator, authors}){

    function onAuthorIdChange(value){        
        bookEditDispatch(internalActionCreator.updateAuthorIdAction(value.id))
    }

    return (
        <Container sx={{padding: '10px'}}>
            <AutoCompleteTextField
                autocompleteOptions={authors}
                label={'Authors'}
                optionId={book.authorId}
                getOptionString={(option) => option.name +' '+ option.surname}
                onValueChange={onAuthorIdChange}
                />
            <InputLabelCommon 
                labelText="Tytuł" 
                textValue={book.title} 
                dispatch={bookEditDispatch}
                actionCreator={internalActionCreator.updateTitleAction}/>
            <InputLabelCommon 
                labelText="Liczba stron" 
                textValue={book.pages} 
                dispatch={bookEditDispatch}
                actionCreator={internalActionCreator.updatePagesAction}/>
        </Container>
    )

}
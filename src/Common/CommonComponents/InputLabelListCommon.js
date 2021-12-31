import React, {useRef} from 'react'
import Container from '@mui/material/Container'
import InputLabelCommon from './InputLabelCommon'

export default function InputLabelListCommon({inputLabelObjects}){

    //const objectsRef = useRef([...inputLabelObjects])
    // objectsRef.current.forEach(el =>{
    //     el.textValueRef = undefined
    // });

    function createInputLabels(){

     

        // return objectsRef.current.map(ilo => {            
        //     <InputLabelCommon textValueRef={ilo.textValue} labelText={ilo.labeltext} validator={ilo.validator.validate} />
        // })
    }


    return (
        <Container>
            {/* {createInputLabels()} */}
        </Container>
    )
}
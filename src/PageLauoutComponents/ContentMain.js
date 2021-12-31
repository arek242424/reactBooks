import React from 'react';
import Container from '@mui/material/Container';
import {useSelector} from 'react-redux'

export default function ContentMain(){
    
    const content = useSelector((state) => state.appState.contentMain);

    return (
        <Container sx={{width: '78%', float: 'left'}}>
            {content === null ? <div>NO CONTENT</div> : content}
        </Container>
    )

}
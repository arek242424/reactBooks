import React from 'react';
import { List } from '@mui/material';
import HistoryListElement from './HistoryListElement'


export default function HistoryList({historyList}){

    return( 
        <List component="nav">
            {historyList.map(el => {
                return <HistoryListElement key={el.id} historyListElement={el}/>
            })}
        </List> 
    )
}
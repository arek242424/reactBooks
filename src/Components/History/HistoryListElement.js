import React from 'react';
import { ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import {historyRecordMouseEntered} from './../../Reducers/historyReducer'

export default function HistoryListElement({historyListElement}){

    const dispatch = useDispatch()

    function onMouseEnterHandler(){
        dispatch(historyRecordMouseEntered({historyRecordMouseEntered: {
            id: historyListElement.changedElementId,
            historyAction: historyListElement.historyAction
        }}))
    }

    function onMouseLeaveHandler(){
        dispatch(historyRecordMouseEntered({historyRecordMouseEntered: {
            id: undefined,
            historyAction: undefined
        }}))
    }

    return (
            <ListItemButton 
                onMouseEnter={onMouseEnterHandler}                 
                onMouseLeave={onMouseLeaveHandler}>
                <ListItemText                   
                    primary={'Data ' + 
                        historyListElement.date.getDate() + '.' + 
                        (historyListElement.date.getMonth() + 1) + '.' +
                        historyListElement.date.getFullYear()}
                    secondary={historyListElement.details} />
            </ListItemButton>     
    )
}
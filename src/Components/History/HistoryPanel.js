import React, {useEffect} from 'react';
import { Box, Typography, Button } from '@mui/material';
import HistoryList from './HistoryList'
import {useSelector} from 'react-redux'
import {loadHistoryStatusEnum} from './../../Enums/loadHistoryStatusEnum'
import UseHistory from './../../CustomHooks/UseHistory'
import UseWaitingDotsAnimation from './../../CustomHooks/UseWaitingDotsAnimation'

export default function HistoryPanel(){

    const historyList = useSelector(state => state.historyState.historyList)
    const loadHistoryStatus = useSelector(state => state.historyState.loadHistoryStatus)
    const {fetchAndDispatchHistory} = UseHistory()
    const [dots, start] = UseWaitingDotsAnimation(8, 200)

    useEffect(()=>{
        if(loadHistoryStatus === loadHistoryStatusEnum.LOADING){
            start(true)
        }        
        else{
            start(false)
        }
    }, [loadHistoryStatus]);


    return (
        <Box sx={{ margin: 2, width: '20%', height: '100%', right: 0, position: 'absolute', border: 2, borderRadius: '5%'}}>            
            <Typography variant="h6">
                History of actions
            </Typography>
            {loadHistoryStatus === loadHistoryStatusEnum.FAILED ? 
                <Box>
                    <span>ERROR: Cannot load history.</span>
                    <Button onClick={()=> fetchAndDispatchHistory()}>Refresh</Button>
                </Box>
            : "" }
            {loadHistoryStatus === loadHistoryStatusEnum.LOADING ? dots : ""}
            
            <Box>
                <HistoryList historyList={historyList} />
            </Box>
            
        </Box>
    )
}
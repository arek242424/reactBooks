import {historyState} from './../store/ApplicationState'
const { createSlice } = require("@reduxjs/toolkit");


export const actions = {
    addRecordToHistoryAction: 'historyState/addaddRecordToHistory',
    updateHistoryAction: 'historyState/updateHistory',
    historyRecordMouseEnteredAction: 'historyState/historyRecordMouseEntered '
}

export const historyReducerSlice = createSlice({
    name: 'historyState',
    initialState: historyState,
    reducers: {
        addRecordToHistory: (state, action) => {
            state.historyList.push(action.payload.historyRecord);
        },
        updateHistory: (state, action) => {
            state.historyList = action.payload.historyList;
        },
        setLoadHistoryStatus: (state, action) =>{
            state.loadHistoryStatus = action.payload.loadHistoryStatus;
        },
        historyRecordMouseEntered: (state, action) =>{
            state.historyRecordMouseEntered = action.payload.historyRecordMouseEntered;
        }
        
    }
})

export const {addRecordToHistory, updateHistory, setLoadHistoryStatus, historyRecordMouseEntered} = historyReducerSlice.actions

export default historyReducerSlice.reducer;
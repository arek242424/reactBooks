import {useDispatch} from 'react-redux'
import {addRecordToHistory} from '../Reducers/historyReducer'
import {historyActionEnum} from '../Enums/historyActionEnum'
import {historyRecordModel} from '../Models/historyRecordModel'
import {addHistoryRecord} from './../Database/historyRepository'


function getHistoryRecordModel(historyAction, changedRecord){
    let historyRecord = undefined
    switch(historyAction){
        case historyActionEnum.BOOK_EDITED:
            historyRecord = new historyRecordModel(
                    new Date(Date.now()),
                    historyActionEnum.BOOK_EDITED,
                    `Book '${changedRecord.title}' was edited`,
                    changedRecord.id
                );
            break;
        case historyActionEnum.BOOK_ADDED:
            historyRecord = new historyRecordModel(
                new Date(Date.now()),
                historyActionEnum.BOOK_ADDED,
                `Book '${changedRecord.title}' was added`,
                changedRecord.id
            );
        break;
        case historyActionEnum.BOOK_REMOVED:
            historyRecord = new historyRecordModel(
                new Date(Date.now()),
                historyActionEnum.BOOK_REMOVED,
                `Book '${changedRecord.title}' was removed`,
                -1
            );
        break;
    }

    return historyRecord
}


export function addRecordToHistoryThunk(historyActionEnum, changedRecord) {    
    return async (dispatch, getState) => {
        try {
            const historyRecord = getHistoryRecordModel(historyActionEnum, changedRecord)    
            const [status, bookId] = await addHistoryRecord(historyRecord)
            if (status === 'ok') {
                historyRecord.id = bookId
                dispatch(addRecordToHistory({ historyRecord: historyRecord }))
            }
            else {
                console.log('Record was not added. Status:  ', status)
            }
        } catch (err) {
            console.log('Error while saving history record', err);
            console.trace()
        }

    }
}



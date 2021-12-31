import {actions, setLoadHistoryStatus} from './../Reducers/historyReducer'
import {loadHistoryStatusEnum} from './../Enums/loadHistoryStatusEnum'
import {addHistoryRecord} from './../Database/historyRepository'

export default function historyMiddleware({getState, dispatch}){
    return next => async action => {
        switch(action.type){
            case actions.updateHistoryAction:
                dispatch(setLoadHistoryStatus({loadHistoryStatus: loadHistoryStatusEnum.NONE}))
                break;
        }

        next(action)
    }
}
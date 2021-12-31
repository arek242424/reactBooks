import {useDispatch} from 'react-redux'
import {getAllHistory} from './../Database/historyRepository'
import {updateHistory, setLoadHistoryStatus} from './../Reducers/historyReducer'
import {loadHistoryStatusEnum} from './../Enums/loadHistoryStatusEnum'

export default function UseHistory(){

    const dispatch = useDispatch()


    async function fetchAndDispatchHistory(){
        try{
            dispatch(setLoadHistoryStatus({loadHistoryStatus: loadHistoryStatusEnum.LOADING}))
            var history = await getAllHistory()
            dispatch(updateHistory({historyList: history}))
            dispatch(setLoadHistoryStatus({loadHistoryStatus: loadHistoryStatusEnum.LOADED}))
        }catch(err){
            console.log(err)
            dispatch(setLoadHistoryStatus({loadHistoryStatus: loadHistoryStatusEnum.FAILED}))
        }
    }

    return {fetchAndDispatchHistory}
}
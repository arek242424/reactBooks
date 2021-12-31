import {setContentMain, setSelectedBook, setSaveStatus, addBook} from './../Reducers/mainReducer'
import {actions} from './../Reducers/actionCreator'
import {removeBook, addBookToDb} from './../Database/bookRepository'
import {saveStatusEnum} from './../Enums/saveStatusEnum'
import {historyActionEnum} from './../Enums/historyActionEnum'
import {addRecordToHistoryThunk} from './../Thunk/addRecordToHistoryThunk' 

export default function appStateMiddleware({getState, dispatch}){
    return next => async action =>{        
        switch(action.type){
            case actions.removeBookAction:
                try{
                    const bookIdToRemove = action.payload.bookId;
                    const state = await getState()                    
                    const status = await removeBook(bookIdToRemove)                
                    if(status === 'ok'){
                        dispatch(addRecordToHistoryThunk(historyActionEnum.BOOK_REMOVED, state.appState.books.find(book => book.id === bookIdToRemove)))
                        break;
                    }
                    else{
                        console.log(`book was not removed [status : ${status}]`)                        
                        return;
                    }
                }catch(err)
                {
                    console.log('removing book failed ' + err)
                    console.trace()
                    return;
                }
            case actions.addBookAction:
                try{
                    dispatch(setSaveStatus({saveStatus: saveStatusEnum.SAVING}))
                    const [status, bookId] = await addBookToDb(action.payload.book)
                    if(status == 'ok'){
                        dispatch(setSaveStatus({saveStatus: saveStatusEnum.SAVED}))        
                        dispatch(addRecordToHistoryThunk(historyActionEnum.BOOK_ADDED, {...action.payload.book, id: bookId}))                
                        break;
                    }
                    else{
                        dispatch(setSaveStatus({saveStatus: saveStatusEnum.FAILED}))
                        return;
                    }
                }catch(err){
                    dispatch(setSaveStatus({saveStatus: saveStatusEnum.FAILED}))
                    console.log('Error while adding book', err)
                    return;
                }            
        }

        next(action)
    }
}
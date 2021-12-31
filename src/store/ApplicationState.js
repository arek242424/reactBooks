import BookListPanel from '../Components/BookList/BookListPanel'
import {saveStatusEnum} from './../Enums/saveStatusEnum'
import {loadHistoryStatusEnum} from './../Enums/loadHistoryStatusEnum'
import {historyActionEnum} from './../Enums/historyActionEnum'

export const applicationState = {
    contentMain: undefined,
    selectedBook: null,
    books: [],
    saveStatus:  saveStatusEnum.NONE,
    authors: []
}


export const historyState = {
    historyList: [],
    loadHistoryStatus: loadHistoryStatusEnum.NONE,
    historyRecordMouseEntered: {
        id: undefined,
        historyAction: undefined
    }
}

//newsHeadersList object example
// {
//     id: -1,
//     date: null,
//     title: "",
//     subTitle: "",
//     listSmallPictureName: "picture name id"

// }
export const newsState ={
    newsHeadersList: []       
}



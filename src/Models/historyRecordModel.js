
export function historyRecordModel(date, historyAction , details, bookId, id){
    if(!(date instanceof Date)){
        throw 'date should be instance of Date'
    }
    const bookIdType = typeof bookId;
    if(bookIdType !== 'number' && bookIdType !== 'undefined' ){
        throw 'bookId should be instance of Number'
    }    

    this.id = id
    this.date = date
    this.historyAction = historyAction
    this.details = details
    this.changedElementId = bookId
}
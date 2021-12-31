import {getHistoryDb, saveHistoryDb} from './db'
import {historyRecordModel} from './../Models/historyRecordModel'
import {getNextTableId} from './dbHelper'

let first = true;

export async function getAllHistory(){
    
    await new Promise(r => setTimeout(r, 1000))
    // if(first === true) {
    //     first = false
    //     throw 'asfjlsakdjf'        
    // }
    return getHistoryDb();
}


export async function addHistoryRecord(record){
    await new Promise(r => setTimeout(r, 2500))
    let rec;
    if(record instanceof historyRecordModel)
    {
        rec = {...record}
    }else{
        rec = record
    }
    let db =  getHistoryDb();
    rec.id = getNextTableId(db)
    db.push(rec)
    saveHistoryDb(db)
    return ['ok', rec.id]
}


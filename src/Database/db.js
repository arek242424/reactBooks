import {coverEnum} from './../Enums/coverEnum'
import {historyActionEnum} from './../Enums/historyActionEnum'
import {fs} from 'fs'
import { isUndefined, isNull } from 'util'

const mainDb = 'mainDb'
const historyDb = 'historyDb'
const newsDb = 'newsDb'
const authorDb = 'authorDb'
const picturesDbFolder = 'C:/Users/apukocz/source/repos/reactappSimple/pictureDb/'

function getDbInternal(dbName){
    let dbString = window.localStorage.getItem(dbName); 
    //jak tu nie ma isNull(dbString), wtedy devTool debuger zaczyna się dziwnie zachwowywać (do state: books leci null)
    //po refreshu strony w przeglądarce, kod nie zatrzymuje się na breakpointach np w App.js
    //żeby znowu się zatrzymywał się, trzeba dać breakpointa w innym miejscu
    //Do przetestowania w przyszłości !!!!!!!!!!!
    if(isUndefined(dbString) || dbString === 'undefined' || isNull(dbString))
    {
        window.localStorage.setItem(dbName, JSON.stringify(getInitialDb(dbName)))
        dbString = window.localStorage.getItem(dbName);
    }

    return JSON.parse(dbString)
}

function historyDbParseSomeObjects(db){
    return db.map(record => {
        return {...record, date: new Date(record.date)}
    })
}

function getInitialDb(dbName){
    switch(dbName){
        case mainDb:
            return mainDbInitial;
        case historyDb:
            return dbHistoryInitial; 
        case newsDb:
            return dbNewsInitial;           
        case authorDb:
            return dbAuthorInitial;
    }
}



export function getHistoryDb(){
    return historyDbParseSomeObjects(getDbInternal(historyDb))
}

export function getDb() {
    return getDbInternal(mainDb)
}

export function saveDb(db){
    window.localStorage.setItem(mainDb, JSON.stringify(db))
}

export function saveHistoryDb(db){
    window.localStorage.setItem(historyDb, JSON.stringify(db))
}

export function getNewsDb(){
    return getDbInternal(newsDb)
}

export function getAuthorDb(){
    return getDbInternal(authorDb)
}

export function saveAuthorDb(db){
    window.localStorage.setItem(authorDb, JSON.stringify(db))
}

export async function getPicture(folderName, fileName){
    let folderWithPictures = picturesDbFolder + folderName + '/';

    if(fileName === '*'){

    }
    else{
        //jednak trzeba zrobic serwer plików, bo tak nie działa
        let fullPath = 'file:///'+folderWithPictures+fileName
        console.log(fullPath)
        let response = await fetch(fullPath)
        let arrBuffer = await response.arrayBuffer()

        return arrBuffer;
    }
}



const mainDbInitial = [
    {
        id: 1,
        title: "Instytut",        
        pages: 550,
        cover: coverEnum.SOFT,
        authorId: 2
    },
    {
        id: 2,
        title: "Skok na Banki",        
        pages: 500,
        cover: coverEnum.SOFT,
        authorId: 3
    },
    {
        id: 3,
        title: "Attyla",        
        pages: 333,
        cover: coverEnum.HARD,
        authorId: 1
    },
    {
        id: 4,
        title: "Wieża",        
        pages: 271,
        cover: coverEnum.HARD,
        authorId: 2
    }
];

const dbAuthorInitial = [
    {
        id:1,
        name: 'William',
        surname: "Nappier",
        dead: false
    },
    {
        id:2,
        name: 'Stephen',
        surname: "King",
        dead: false
    },
    {
        id:3,
        name: 'Piotr',
        surname: "Nisztor",
        dead: false
    },
    {
        id:4,
        name: 'J.R.R.',
        surname: "Tolkien",
        dead: true
    }
]


const dbHistoryInitial=[
    {
        id: 1,
        date: new Date(2021, Math.random()*100 % 11 + 1, Math.random()*100 % 27 + 1),
        historyAction: historyActionEnum.BOOK_EDITED,
        details: 'Book Stephen King was edited',
        changedElementId: 1
    },
    {
        id: 2,
        date: new Date(2021, Math.random()*100 % 11 + 1, Math.random()*100 % 27 + 1),
        historyAction: historyActionEnum.BOOK_ADDED,
        details: 'Book Skok na banki was added',
        changedElementId: 2
    },
    {
        id: 3,
        date: new Date(2021, Math.random()*100 % 11 + 1, Math.random()*100 % 27 + 1),
        historyAction: historyActionEnum.BOOK_REMOVED,
        details: 'Book Paradyzja was removed',
        changedElementId: undefined
    },    
]


const dbNewsInitial=[
    {
        id: 1,
        date: new Date(2021, Math.random() + 100 % 10 +1, Math.random() * 100 % 28 + 1),
        title: "Czy Pani jest nienormalna???",
        subTitle: "Korwin atakuje. Znowu obraża kobiety. Precz z wolnym rynkiem!!!!!",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        listSmallPictureName: 'korwinSmall',
        pictureFolderName: '1111'
    },
    {
        id: 2,
        date: new Date(2021, Math.random() + 100 % 10 +1, Math.random() * 100 % 28 + 1),
        title: "Krowy zabiły teściową",
        subTitle: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots!!!",
        content: "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        listSmallPictureName: 'szalonaKrowaSmall',
        pictureFolderName: '2222'
    },
    {
        id: 3,
        date: new Date(2021, Math.random() + 100 % 10 +1, Math.random() * 100 % 28 + 1),
        title: "1000 + na trzeciego kota!",
        subTitle: "omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        listSmallPictureName: 'patimatNormal',
        pictureFolderName: '3333'
    },   
    {
        id: 4,
        date: new Date(2021, Math.random() + 100 % 10 +1, Math.random() * 100 % 28 + 1),
        title: "Karakan znowu prześladuje!",
        subTitle: "Omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariaturSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
        listSmallPictureName: 'patimatNormal',
        pictureFolderName: '4444'
    }
]

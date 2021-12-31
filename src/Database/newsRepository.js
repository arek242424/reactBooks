import {getNewsDb} from './db'



export async function getNewsHeadersList(){
    await new Promise(r => setTimeout(r, 1000));
    let db = getNewsDb()
    return db.map(oneNews =>{ 
        let {pictureFolderName, content, ...newsHeader} = oneNews
        return newsHeader
    });
}


export async function getOneNews(newsId){
    await new Promise(r => setTimeout(r, 2000))
    let oneNews = getNewsDb().find(news => news.id === newsId)
    if(oneNews){
        return ['ok', oneNews]
    }
    throw 'News not exists'    
}
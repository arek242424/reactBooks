import {getDb, saveDb, getAuthorDb} from './db.js';
import {getNextTableId} from './dbHelper'
import {getAuthor} from './authorRepository'

export const getAll = async () => {    
    await new Promise(r => setTimeout(r, 100));
    const authors = getAuthorDb() 
    return getDb().map(book =>{
        return {...book, author: authors.find(a => a.id === book.authorId)}
    });
}

export const getAllWithAuthors = async () =>{    
    const books = await getAll();
    const booksWithAuthors = [];
    
            
    for(let book of books){
        const author = await getAuthor(book.authorId)
        booksWithAuthors.push({...book, author: author})
    }        

    return booksWithAuthors;
}

export const removeBook = async (bookId) =>{
    await new Promise((r) => setTimeout(r, 200));
    const dbBooks = getDb().filter(book => book.id != bookId)
    saveDb(dbBooks)
    return 'ok'
}

export const addBookToDb = async (book) =>{
    await new Promise((r) => setTimeout(r, 2000))
    let db = getDb()
    book.id = getNextTableId(db);    
    db.push(book)
    saveDb(db)
    return ['ok', book.id]
}

export const editBook = async (book) => {
    await new Promise((r) => setTimeout(r, 4000))
    let db = getDb()
    const bookToEdit = db.find(b => b.id === book.id)
    if(bookToEdit)
    {
        Object.assign(bookToEdit, book)
        saveDb(db)
        console.log("book edited", book.title)
    }
    else{
        throw 'book does not exist'
    }

    return "ok"
}




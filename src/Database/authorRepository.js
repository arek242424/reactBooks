import {getAuthorDb, saveAuthorDb} from './db'

export async function getAuthor(authorId){
    const [status, authors] =  await getAuthorsList()
    const author = authors.find(author => author.id === authorId)
    return author;
}

export async function getAuthorsList(){
    await new Promise(r => setTimeout(r, 200))

    const authors = getAuthorDb();
    return ['ok', authors];
}

export async function addAuthor(author){
    await new Promise(r => setTimeout(r, 1500))

    const authors = getAuthorDb()
    authors.push(author)
    saveAuthorDb(authors)
    return 'ok'
}

export async function removeAuthor(authorId){
    await new Promise(r => setTimeout(r, 1500))

    const authors = getAuthorDb().filter(author => author.id !== authorId)
    saveAuthorDb(authors)
    return 'ok'
}

export async function editAuthor(author){
    await new Promise(r => setTimeout(r, 1000))
}
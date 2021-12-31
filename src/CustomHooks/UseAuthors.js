import {useDispatch} from 'react-redux'
import {getAuthorsList, addAuthor, editAuthor, removeAuthor} from './../Database/authorRepository'
import {setAuthors} from './../Reducers/mainReducer'
import { useState } from 'react'
import UseInvokeAsyncRepoMethod from './../CustomHooks/UseInvokeAsyncRepoMethod'

export default function UseAuthors(){

    const dispatch = useDispatch()
    const [invokeAsyncMethod, invokeStatus, resetinvokeState] = UseInvokeAsyncRepoMethod()

    async function updateAuthorsList(){
        invokeAsyncMethod(async ()=>{
            const [status, authors] = await getAuthorsList()
            dispatch(setAuthors({authors: authors}))
            return status;
        })
    }


    async function addAuthor(author){
        
    }

    return [updateAuthorsList, invokeStatus]
}
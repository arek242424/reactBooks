import {getNewsHeadersList} from './../Database/newsRepository'
import {useDispatch} from 'react-redux'
import {setNewsList} from './../Reducers/newsReducer'

export default function UseNewsHeaders(){

    const dispatch = useDispatch()

    async function loadNewsHeadersFromDb(){
        try{
            const newsHeaders = await getNewsHeadersList();
            dispatch(setNewsList({newsHeadersList: newsHeaders}))
        }catch(err){
            console.trace('fetching news failed: ', err)
        }
    }

    return {loadNewsHeadersFromDb}

}
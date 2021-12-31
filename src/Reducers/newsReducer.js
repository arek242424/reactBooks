import {createSlice} from '@reduxjs/toolkit'
import {newsState} from './../store/ApplicationState'

export const actions = {
    setNewsListAction: 'newsState/setNewsList'
}


export const newsStateReducerSlice = createSlice({
    name: 'newsState',
    initialState: newsState,
    reducers:{
        setNewsList: (state, action) =>{
            state.newsHeadersList = action.payload.newsHeadersList;
        }
    }

})


export const {setNewsList} = newsStateReducerSlice.actions

export default newsStateReducerSlice.reducer


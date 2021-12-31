import {configureStore} from '@reduxjs/toolkit'
import appStateReducer from './../Reducers/mainReducer'
import historyReducer from './../Reducers/historyReducer'
import newsStateReducer from './../Reducers/newsReducer'
import appStateMiddleware from './../Middlewares/appStateMiddleware'
import viewResolverMiddleware from './../Middlewares/viewResolverMiddleware'
import historyMiddleware from './../Middlewares/historyMiddleware'
import thunk from 'redux-thunk'

export default configureStore({
    reducer: {
        appState: appStateReducer,
        historyState: historyReducer,
        newsState: newsStateReducer
    },
    middleware:[appStateMiddleware, viewResolverMiddleware, historyMiddleware, thunk]
})
import React from 'react';
import { List } from '@mui/material';
import NewsListElement from './NewsListElement'

export default function NewsList({newsHeadersList, setNewsId, loadingNewsState, loadingNewsStateEnum}){

    return (
        <List>
            {newsHeadersList.map(newsHeader => <NewsListElement 
                                                    newsHeader={newsHeader} 
                                                    setNewsId={setNewsId}
                                                    clickEnable={loadingNewsState !== loadingNewsStateEnum.LOADING}
                                                    isLoadMode={loadingNewsState === loadingNewsStateEnum.LOADING}/>)}
        </List>
    )
}
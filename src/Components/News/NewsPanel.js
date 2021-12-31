import React, {useState} from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux'
import NewsList from './NewsList'
import NewsDetailsPanel from './NewsDetails/NewsDetailsPanel'
import UseChooseNewsArticle from './../../CustomHooks/UseChooseNewsArticle'

export default function NewsPanel(){

    const newsHeadersList = useSelector(state => state.newsState.newsHeadersList)
    const [setNewsId, newsArticle, loadingNewsState, loadingNewsStateEnum]  = UseChooseNewsArticle()

    return (
        <Box sx={{
            width: '100%'
        }}>
            {newsArticle ? 
                <NewsDetailsPanel newsDetails={newsArticle} setNewsId={setNewsId}/>
                :
                <NewsList 
                    newsHeadersList={newsHeadersList}  
                    setNewsId={setNewsId} 
                    loadingNewsState={loadingNewsState}
                    loadingNewsStateEnum={loadingNewsStateEnum} />                          
            }
        </Box>
    )
}
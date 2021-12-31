import { useState, useEffect, useRef } from "react";
import {getOneNews} from './../Database/newsRepository'

const loadingNewsStateEnum = {
    NONE: Symbol('NONE'),
    LOADING: Symbol('LOADING'),
    LOADED: Symbol('LOADED'),
    FAILED: Symbol('FAILED'),
}

export default function UseChooseNewsArticle(){

    const componentUnmountedRef = useRef(false)
    const [newsId, setNewsId] = useState(undefined)
    const [newsArticle, setNewsArticle] = useState(undefined)
    const [loadingNewsState, setLoadingNewsState] = useState(loadingNewsStateEnum.NONE)

    useEffect(async ()=>{
        if(newsId){
            try{
                setLoadingNewsState(loadingNewsStateEnum.LOADING)
                const [status, news] = await getOneNews(newsId)

                if(componentUnmountedRef.current === true) return;

                if(status === 'ok'){
                    setLoadingNewsState(loadingNewsStateEnum.LOADED)
                    setNewsArticle(news)
                }else{                
                    setLoadingNewsState(loadingNewsStateEnum.FAILED)
                }
            }catch(err){
                if(componentUnmountedRef.current === true) return;
                 
                setLoadingNewsState(loadingNewsStateEnum.FAILED)
            }
        }else{
            setNewsArticle(undefined)
            setLoadingNewsState(loadingNewsStateEnum.NONE)
        }

        return (()=>{
            componentUnmountedRef.current = true
        })
    }, [newsId]);



    return [setNewsId, newsArticle, loadingNewsState, loadingNewsStateEnum];

}
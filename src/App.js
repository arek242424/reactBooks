import logo from './logo.svg';
import './App.scss';
import ContentMain from './PageLauoutComponents/ContentMain';
import UpperMenu from './PageLauoutComponents/UpperMenu';
import {useDispatch} from 'react-redux'
import {useBookList} from './CustomHooks/UseBookList'
import UseHistory from './CustomHooks/UseHistory'
import React, {useEffect, useRef} from 'react'
import {actionCreator} from './Reducers/actionCreator'
import viewEnum from './Enums/viewEnum'
import HistoryPanel from './Components/History/HistoryPanel'
import UseNewsHeaders from './CustomHooks/UseNewsHeaders'
import UseAuthors from './CustomHooks/UseAuthors'

function App() {

  const firstRunRef = useRef(true)
  const {bookList, updateBookList} = useBookList()
  const dispatch = useDispatch()
  const {fetchAndDispatchHistory} = UseHistory()
  const {loadNewsHeadersFromDb} = UseNewsHeaders()
  const [updateAuthorListt] = UseAuthors()

   useEffect(()=>{     
     
     if(!firstRunRef.current)
     {             
       dispatch(actionCreator.updateBooksAction(bookList))     
       dispatch(actionCreator.setContentMainAction(viewEnum.BOOK_LIST_VIEW))
     }
     firstRunRef.current = false;
   }, [bookList])

   useEffect(() =>{    
    loadNewsHeadersFromDb()
    fetchAndDispatchHistory()
    updateAuthorListt()
   },[])

  return (
    <div className="App">
      <UpperMenu />
      <HistoryPanel />
      <ContentMain/>
    </div>
  );
}

export default App;

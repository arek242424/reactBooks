import viewEnumeration from './../Enums/viewEnum'
import BookListPanel from './BookList/BookListPanel';
import BookAddEditPanel from './BookAddEdit/BookAddEditPanel';
import NewsPanel from './News/NewsPanel'
import AuthorsPanel from './AuthorList/AuthorsPanel'

export function getView(viewEnum, props){
    let view = undefined;
    switch(viewEnum){
        case viewEnumeration.BOOK_LIST_VIEW:
            view = <BookListPanel />
            break;
        case viewEnumeration.ADD_EDIT_BOOK_VIEW:
            view = <BookAddEditPanel book={props.book} mode={props.mode}/>
            break;
        case viewEnumeration.NEWS_VIEW:
            view = <NewsPanel/>         
            break;
        case viewEnumeration.AUTHORS_VIEW:
            view = <AuthorsPanel/>
            break;
        default:
            view = <div>VIEW NOT EXISTS {viewEnum}</div>
            break;
    }
    return view;
}
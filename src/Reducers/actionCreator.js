export const actions = {
    setContentMainAction: 'appState/setContentMain',
    updateBooks: 'appState/updateBooks',
    removeBookAction: 'appState/removeBook',
    addBookAction: 'appState/addBook',
    setAuthorsAction: 'appState/setAuthors'
}

export const actionCreator = {
    setContentMainAction: (viewEnum, props) => 
                             {return {type: actions.setContentMainAction , payload: {viewEnum: viewEnum, props: props}}},
    updateBooksAction: (books) => {return {type: actions.updateBooks, payload: books}},
    removeBookAction: (bookId) => {return {type: actions.removeBookAction, payload: {bookId: bookId}}},
    addBookAction: (book) => {return {type: actions.addBookAction, payload: {book: book}}}
}
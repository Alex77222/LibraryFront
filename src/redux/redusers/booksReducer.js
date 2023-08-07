import {bookAPI} from "../../api/api";
import {type} from "@testing-library/user-event/dist/type";

const SET_BOOKS = 'SET_BOOKS'
const SET_BOOKS_PAGE = 'SET_BOOKS_PAGE'


export const setBooks = (books) => ({type: SET_BOOKS, books});
export const setBooksPage = (currentPage, totalPage) => ({type: SET_BOOKS_PAGE, currentPage, totalPage});


let initialState = {
    books: [],
    currentPage: 1,
    totalPage: 0,
    searchString: '',
    bookNames: []

}
const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKS: {
            let bookNames = action.book.map(x => {
                return {id: x.id, name: x.name}
            });
            return {
                ...state,
                books: action.books,
                bookNames: bookNames
            }
        }
        case SET_BOOKS_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
                totalPage: action.totalPage
            }
        }
        default:
            return state;
    }
}


export const getBooks = (currentPage, searchString) => (dispatch) => {
    bookAPI.getBooks(currentPage, searchString).then(response => {
        if (response.error == null) {
            dispatch(setBooks(response.data.content));
            dispatch(setBooksPage(response.data.currentPage, response.data.totalPage))
        } else {
            switch (response.status) {
                case 500:
                    break;
                default:
                    break;
            }

        }

    })
}

export default booksReducer
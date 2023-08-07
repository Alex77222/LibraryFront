import React from "react";
import Book from "./Books";
import {getBooks} from "../../redux/redusers/booksReducer";
import {connect} from "react-redux";

class BooksContainer extends React.Component {
    
    componentDidMount() {
        this.props.getBooks(this.props.currentPage,this.props.totalPage)
    }

    render() {
        return <Book {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{
        books: state.booksReducer.books,
        currentPage:state.booksReducer.currentPage,
        totalPage:state.booksReducer.totalPage,
        searchString: state.booksReducer.searchString,
    }
}

const mapDispatchToProps = (dispatch) =>{
    
    return {
        getBooks: (currentPage, searchString) => dispatch(getBooks(currentPage, searchString)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
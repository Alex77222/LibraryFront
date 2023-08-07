import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn, MDBContainer
} from 'mdb-react-ui-kit';
import BookCard from "./BookCard";

const Book = (props) => {
    return (
        <MDBContainer>
            {props.books.map((book)=>(
                <BookCard
                key ={book.id}
                books = {book}
                description = {book.description}
                />
            ))}
        </MDBContainer>
    );
}

export default Book
import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn, MDBContainer
} from 'mdb-react-ui-kit';

const BookCard = (props) => {
    return (
        <MDBContainer>
            <MDBCard>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...'/>
                <MDBCardBody>
                    <MDBCardTitle>{props.books.BookName}</MDBCardTitle>
                    <MDBCardText>
                        
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default BookCard
import React, {useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function NavBar(props) { 
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/books '>Brand</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/books'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                Disabled
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="ms-auto">
                            <form className='d-flex  input-group w-auto align-content-center'>
                                <input type='search' className='form-control' placeholder='Type query'
                                       aria-label='Search'/>
                                <MDBBtn color='primary'>Search</MDBBtn>
                            </form>
                        </MDBNavbarItem>
                        <MDBNavbarItem className="ms-auto justify-content-end">
                            {
                                !props.auth ? <MDBBtn href='/auth'>Login</MDBBtn> 
                                    :   <MDBNavbarItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                                {props.userName}
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link>Profile</MDBDropdownItem>
                                                <MDBDropdownItem link>My Books</MDBDropdownItem>
                                                <MDBDropdownItem link>Exit</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavbarItem>
                            }
                            
                        </MDBNavbarItem>
                    </MDBNavbarNav>


                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}    
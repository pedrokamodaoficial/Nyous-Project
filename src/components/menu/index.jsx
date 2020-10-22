import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../../assets/img/logo.jpg'
import jwt_decode from 'jwt-decode';

const Menu = () => {

    function renderMenu() {
        const token = localStorage.getItem('token-nyous');

        if (token == null) {
            return (
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            );
        } else if ( jwt_decode(token).role === 'Admin' ){
            return(
                <Nav>
                    <Nav.Link href="/admin/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/admin/categorias">Categorias</Nav.Link>
                    <Nav.Link href="/admin/eventos">Eventos</Nav.Link>
                </Nav>
            )
        }else{
            <Nav>
                    <Nav.Link href="/admin/dashboard">Eventos</Nav.Link>
                    <Nav.Link href="/admin/categorias">Sair</Nav.Link>
        }
            console.log(token);
    }

    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt="" style={{width : '50px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                
                { renderMenu() }
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;
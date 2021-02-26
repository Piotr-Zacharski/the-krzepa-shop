import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Icon = styled.i`
position: absolute;
margin-top: 15px;

`;

const Nav = styled.nav`
    margin: 0;
    padding: 0;
    background-color: rgb(41, 50, 60);
    max-width: 100%;
    min-height: 8vh;

    a {
        text-decoration: none;
        display: inline-block;
        text-align: center;
        align-items: center;
        justify-content: space-between;
        padding: 25px;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }
    a:hover {
        color: crimson;
        cursor: pointer;
        transition: 0.5s ease-in-out;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Link to="/">STRONA GŁÓWNA</Link>
            <Link to="/suple">ODŻYWKI</Link>
            <Link to="/burners">SPALACZE TŁUSZCZU</Link>
            <Link to="/vitamins">WITAMINY I MINERAŁY</Link>
            <Link to="/cart"><Icon className="material-icons">shopping_cart</Icon><Cart /></Link>
        </Nav>
    );
}
export default Navbar;
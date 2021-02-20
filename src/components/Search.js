import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`

width: 100px;
height: 30px;
border-radius: 8px;
font-family: 'Montserrat', sans-serif;
font-size: 16px;
background-color: white;
margin-left: 10px;
margin-top: 30px;
outline: none;
border: 1px solid #cecece;
&:hover {
   background-color: crimson;
   color: white;
   transition: 0.5s ease-in-out;
   cursor: pointer;
   box-shadow: 0px 0px 1px 0.3px;
}
`;

const StyledInput = styled.input`

width: 400px;
font-family: 'Montserrat', sans-serif;
font-size: 16px;
margin-top: 80px;
text-align: center;
border: none;
border-bottom: 1px solid #cecece;
padding: 10px;
color: gray;
outline: none;
background-color: transparent;
border-top-style: hidden;
border-right-style: hidden;
border-left-style: hidden;

&:hover {
    cursor: pointer;
    outline: none !important;
}
&:focus {
    outline: none !important;
}
`;

const Search = () => {
    return (
        <div> 
        <StyledInput className="input" type="text" name="Szukaj" placeholder="Wpisz nazwę produktu"></StyledInput>
        <div>
        <StyledButton type="submit">Szukaj</StyledButton>
        </div>
        </div>
    );
}

Search.propTypes = {
    name: PropTypes.string
};

export default Search;
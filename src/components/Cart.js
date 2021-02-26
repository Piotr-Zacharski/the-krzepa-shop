import styled from 'styled-components';
import { useState } from 'react';




const StyledCart = styled.span`
position: absulute;
display: flex;
margin-left: 75px;
margin-top: 10px;
`;

const Cart = (addItems) => {

  const [products, setProducts] = useState([]);

  return ( 
    <StyledCart>{ products }</StyledCart>
   );
}
 
export default Cart;
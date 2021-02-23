import logo from '../img/bcaa.jpg'
import storm from '../img/storm.jpg'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';

const StyledPromo = styled.h1`
animation-name: blinker;
animation-iteration-count: 10;
animation-timing-function: cubic-bezier(.63,.03,.69,.97);
animation-duration: 1.5s;
color: crimson;

@keyframes blinker {
0% { opacity: 1.0; }
25% { opacity: 0.50; }
50% { opacity: 0.0; }
75% { opacity: 0.50; }
100% { opacity: 1.0; }
}
`;

const Promo = () => {
    return ( 
        <div>
            <StyledPromo>Promocja na wybrane produkty!</StyledPromo>
        <div className="frame"><img className="promo" src={logo} alt="bcaa" width="200" /></div>
        <Button variant="contained" color="primary">BCAA</Button>
        <div className="frame"><img className="promo" src={storm} alt="storm" width="200" /></div>
        <Button variant="contained" color="primary">STORM</Button>
        </div>
    );
}

export default Promo;
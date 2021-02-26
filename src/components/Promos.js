import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import logo from '../img/bcaa.jpg';
import storms from '../img/storm.jpg';
import burners from '../img/burner.jpg';
import styled from 'styled-components';
import wheys from '../img/whey.jpg';



const StledContainer = styled.div`
align-items: center;
display: flex;
margin-left: 10px;
padding: 10px;
text-align: center;
justify-content: center;
margin-top: 50px;
`;

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

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 300,
    margin: 10,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'crimson',
    color: 'white',
    margin: 'auto',
  },
  img: {
    marginLeft: -18,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default function Promos() {
  const classes = useStyles();

  const [burner, setBurner] = useState('Do koszyka');
  const [bcaa, setBcaa] = useState('Do koszyka');
  const [whey, setWhey] = useState('Do koszyka');
  const [storm, setStorm] = useState('Do koszyka');

  const handleClick = () => {
    setBurner('Dodano');
  };
  const handleClicks = () => {
    setBcaa('Dodano');
  };
  const handleClicka = () => {
    setWhey('Dodano');
  };
  const handleClickb = () => {
    setStorm('Dodano');
  };

  return (
    <div><StyledPromo>Promocja na wybrane produkty!</StyledPromo>
      <StledContainer>
    <Card className={classes.root}>
      <CardContent className={classes.img}>
      <img src={burners} alt="burner" width="200" />
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  { burner }</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.img}>
      <img src={wheys} alt="whey" width="200" />
      </CardContent>
      <CardActions>
        <Button onClick={handleClicka} className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  { whey }</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.img}>
      <img src={logo} alt="bcaa" width="200" />
      </CardContent>
      <CardActions>
        <Button onClick={handleClicks} className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  { bcaa }</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    <CardContent className={classes.img}>
    <img src={storms} alt="bcaa" width="200" />
    </CardContent>
    <CardActions>
      <Button onClick={handleClickb} className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  { storm }</Button>
    </CardActions>
  </Card>
  </StledContainer>
  </div>
  );
}
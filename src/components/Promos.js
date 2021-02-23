import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import logo from '../img/bcaa.jpg';
import storm from '../img/storm.jpg';
import burner from '../img/burner.jpg';
import styled from 'styled-components';
import whey from '../img/whey.jpg';



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

  return (
    <div><StyledPromo>Promocja na wybrane produkty!</StyledPromo>
      <StledContainer>
    <Card className={classes.root}>
      <CardContent className={classes.img}>
      <img src={burner} alt="burner" width="200" />
      </CardContent>
      <CardActions>
        <Button className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  Do koszyka</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.img}>
      <img src={whey} alt="whey" width="200" />
      </CardContent>
      <CardActions>
        <Button className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  Do koszyka</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent className={classes.img}>
      <img src={logo} alt="bcaa" width="200" />
      </CardContent>
      <CardActions>
        <Button className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  Do koszyka</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
    <CardContent className={classes.img}>
    <img src={storm} alt="bcaa" width="200" />
    </CardContent>
    <CardActions>
      <Button className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />  Do koszyka</Button>
    </CardActions>
  </Card>
  </StledContainer>
  </div>
  );
}
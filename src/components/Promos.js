import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';




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
    maxWidth: 260,
    maxHeight: 300,
    margin: 10,
  },
  btn: {
    justifyContent: 'center',
    backgroundColor: 'crimson',
    color: 'white',
    margin: 'auto',
  },
  img: {
    marginLeft: -18,
    justifyContent: 'center',
  },
});

export default function Promos() {
  const classes = useStyles();

  const [promotions, setPromotions] = useState ([
      
      { id: 1, title: "Thermo Fat Burner", price:"50,00", image: require ("../img/burner.jpg") },
      { id: 2, title: "ISO Whey Zero", price:"100,00", image: require ("../img/whey.jpg") },
      { id: 3, title: "BCAA", price: "55,00", image: require ("../img/bcaa.jpg") },
      { id: 4, title: "Universal STORM", price: "110,00", image: require ("../img/storm.jpg") }]);

  return (
    <div>
    <StyledPromo>Promocja na wybrane produkty!</StyledPromo>
      <StledContainer>
        {promotions.map((product) => (
          <Card className={classes.root} key={product.id}>
          <CardContent className={classes.img}>
          <img src={product.image} />
          </CardContent>
          <p>{product.title}</p>
          <h6>{product.price} zł</h6>
          <CardActions>
            <Button className={classes.btn} variant="contained" size="small"><ShoppingCartIcon />Do koszyka</Button>
          </CardActions>
        </Card>
        ))}
          </StledContainer>
  </div>
  );
}

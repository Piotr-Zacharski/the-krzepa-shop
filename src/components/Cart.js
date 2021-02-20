import React, { Component } from 'react'


const products = [
{
    id: 1,
    name: 'Kreatyna',
    sku: 'kskskskks',
    price: 130.0,
},
{
    id: 2,
    name: 'BCAA',
    sku: 'kskskskks',
    price: 50.0,
},
{
    id: 3,
    name: 'Karnityna',
    sku: 'kskskskks',
    price: 30.0, 
},
{
    id: 4,
    name: 'Multiwitaminy',
    sku: 'kskskskks',
    price: 29.0, 
},
];

class Cart extends Component {
  render () {
    return (
        <div>
      <Cart currency="zł" />
      <div>
      {products.map((product, key) => {
            return (
                <div className="col" key={key}>
                  <div className="product-item">
                    <div className="pi-pic">
                       <div className="pi-links">
                          <AddCartButton
                            product={product}
                            styles={{ backgroundColor: '#009688', color: 'white', border: '0' }}
                          />
                       </div>
                    </div>
                    <div className="pi-text">
                        <p>{product.name}</p>
                        <h6>{formatter.format(product.price)}</h6>
                    </div>
                  </div>
                </div>
              );
      })}
      </div>
      </div>
    )
  }
}

export default Cart;
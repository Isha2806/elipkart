import './App.css';
import React from 'react';
import { products } from './db/products';
import ProductList from './pages/productList/ProductList';
function App() {
  return (
    <div className="App">
        <ProductList/>
      <h1>React</h1>
      {products.map((product)=>{
        return(
          <div>
            <p>{product.title}</p>
            <img src = {product.img} alt='ih'/>
            <p>{product.originalPrice}</p>
            <span>Price : {product.price}</span>
          
          </div>)
        
      })}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import ShowCards from '../ShowCards/ShowCards';
import './LoadCard.css'
const LoadCard = (props) => {
    const {addCount} = props
    const [products, setProducts] = useState([])
    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
   
    return(
      <div className='mt-5 cardStyle'>
      
        {
          products.map((product, index) => <ShowCards addCount={addCount} key={index} products={product}></ShowCards>)
        }
      </div>
    );
};

export default LoadCard;
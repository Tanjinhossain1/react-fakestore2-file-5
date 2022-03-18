import React from 'react';
import ReactModal from '../ReactModals/ReactModal';

const ShowCards = (props) => {
    const {addCount} = props
    const {title, category, price,image} = props.products
  return(
    <div className='card image'>
      <img  src={image} alt="" />
      <h3>Title: {title.slice(0, 11)}</h3>
      <h3>category: {category}</h3>
      <h3>price: {price}$</h3>
     <div className='d-flex ms-5 mt-3'>
     <button onClick={addCount} className='btn-success p-3 '>Add To Cart</button>
      {/* <button className='btn-info p-3 ms-5'>Detailes</button> */}
      <ReactModal products={props.products}></ReactModal>
     </div>
    </div>
  )
};

export default ShowCards;
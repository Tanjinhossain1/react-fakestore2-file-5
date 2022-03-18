import React from 'react';
import './Menubar.css'
const Menubar = (props) => {
    const {count} = props;
    return(
      <div className='container'>
        <div className="row">
          <div className='col-md-2 p-2'>Logo</div>    
          <div className='col-md-10'>
           <div className='d-flex p-2 justify-content-end'>
            <li className='items'>Home</li>
            <li className='items'>Contact</li>
            <li className='items'>cart <sup>{count}</sup> </li>
            <li className='items'>About Us</li>
         
           </div>
          </div>
        </div>
      </div>
    );
};

export default Menubar;
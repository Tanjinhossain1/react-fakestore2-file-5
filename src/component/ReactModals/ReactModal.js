import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = (props) => {
    const {title, image, description, price} = props.products
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button className='btn-info p-3 ms-5' variant="primary" onClick={handleShow}>
             Detailes
            </Button>
      
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                  <img className='w-50' src={image} alt="" />
                <Modal.Title>title: {title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{description}</Modal.Body>
              <h4 className='m-3'>Price: {price}</h4>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      };

export default ReactModal;
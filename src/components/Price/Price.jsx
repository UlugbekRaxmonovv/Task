import React, { useState } from 'react'
import '../Price/Price.css'
import { Button, Stack } from 'react-bootstrap'
import Modals from '../Modal/Modals';

const Price = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const showModal = () => {
     setIsModalOpen(true);
   };
   const handleOk = () => {
     setIsModalOpen(false);
   };
   const handleCancel = () => {
     setIsModalOpen(false);
   };
  return (
        <>
        <section>
        <div className="price">
           <div className="container">
        <div className="prices" >
        <div className="price-content">
      <div className="price-title">
                <h1>A Price To Suit Everyone</h1>
            </div>
            <div className="price-par">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
            </div>
             <div className="price-expensive">
                <h1>$40</h1>
                <p>UI Design Kit</p>
             </div>
             <div className="price-btn">
                <p>See, One price. Simple.</p>
                <Stack direction="horizontal" gap={2}>
                 <Button onClick={showModal} className='button' as="a" variant="primary">Purchase Now</Button>
                </Stack>
             </div>
      </div>
        </div>
           </div>
        </div>
        </section>

    <Modals isModalOpen={isModalOpen}  handleOk={handleOk}  handleCancel={handleCancel}/>
        </>
  )
}

export default Price
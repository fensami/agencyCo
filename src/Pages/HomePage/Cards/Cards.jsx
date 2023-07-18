import React from 'react';
import cards_1 from '../../../assets/cards-1.png'
import cards_2 from '../../../assets/cards-2.png'
import cards_3 from '../../../assets/cards-3.png'
const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:ml-14 gap-5 mt-20'>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={cards_1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Convert traffic into sales
</h2>
    <p>Increase sales by showing true dynamics of your website. Build your online store’s trust using Social Proof & Urgency for your business.

</p>
    
  </div>
</div>


      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={cards_2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Increase store trust
</h2>
    <p>Increase sales by showing true dynamics of your website. Build your online store’s trust using Social Proof & Urgency for your business.

</p>
   
</div>
</div>



      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={cards_3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Growth guaranteed
</h2>
    <p>Increase sales by showing true dynamics of your website. Build your online store’s trust using Social Proof & Urgency for your business.

</p>
   
  </div>
</div>



    </div>
  );
};

export default Cards;
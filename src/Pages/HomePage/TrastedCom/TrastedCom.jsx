import React from 'react';
import airbnb from '../../../assets/airbnb.png'
import spotify from '../../../assets/spotify.png'
import shopbot from '../../../assets/shopbot.png'
import paypal from '../../../assets/paypal.png'
import slack from '../../../assets/slack.png'


const TrastedCom = () => {
  return (
    <div className='mt-12'>
      {/* <div className='border mb-12'>
        <p className='text-2xl'>Trusted by companies like:</p>
      </div> */}
      <article className='md:flex grid grid-cols-3 md:justify-between w-3/4 mx-auto mb-5 gap-12 items-center'>
        <img className='w-32' src={airbnb} alt="" />
        <img className='w-32' src={spotify} alt="" />
        <img className='w-32' src={shopbot} alt="" />
        <img className='w-32' src={paypal} alt="" />
        <img className='w-32' src={slack} alt="" />
      </article>
    </div>
  );
};

export default TrastedCom;
import React from 'react';

const PricingPackege = () => {
  return (
    <div className='my-24 bg-[#f5f5f5] py-32'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold'>Pricing Packages</h1>
        <p className='text-xl mt-5'>Monotonectally grow strategic process improvements vis-a-vis integrated resources.</p>
      </div>



      <div className='grid grid-cols-2 gap-5 w-1/2 mx-auto'>
        <article className='border-2 px-8 py-5 text-center font-semibold rounded-lg text-[6610f2] text-blue-700'>
          <h1 className='text-3xl font-bold'>$39</h1>
          <p className='mt-2'>Standard License</p>
          <hr className='my-5' />

          <div>
            <h1 className='my-2'>Push Notifications</h1>
            <h2>Data Transfer</h2>
            <h3 className='my-2'>SQL Database</h3>
            <h4>Search & SEO Analytics</h4>
            <h5 className='my-2'>24/7 Phone Support</h5>
            <h6>6 months technical support</h6>
            <p className='my-2'>10+ profitable keyword</p>
          </div>
          
          <button className='py-3 bg-blue-700 text-white mt-5 rounded-md font-bold border px-5'>Purchase Now</button>
        </article>


        <article className='border-2 px-8 py-5 text-center rounded-lg text-[6610f2] bg-blue-700 font-semibold text-white'>
          <h1 className='text-3xl font-bold'>$39</h1>
          <p className='mt-2'>Extended License</p>
          <hr className='my-5' />

          <div>
            <h1 className='my-2'>Push Notifications</h1>
            <h2>Data Transfer</h2>
            <h3 className='my-2'>SQL Database</h3>
            <h4>Search & SEO Analytics</h4>
            <h5 className='my-2'>24/7 Phone Support</h5>
            <h6>6 months technical support</h6>
            <p className='my-2'>10+ profitable keyword</p>
          </div>
          
          <button className='py-3 mt-5 rounded-md font-bold border px-5'>Purchase Now</button>
        </article>


        
      </div>


      <p className='text-center font-semibold mt-10 text-slate-500'>If you need custom services or Need more? <span className='text-red-500'>Contact us</span></p>
    </div>
  );
};

export default PricingPackege;
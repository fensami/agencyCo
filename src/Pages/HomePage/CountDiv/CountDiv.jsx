import React from 'react';

const CountDiv = () => {
  return (
    <div className='md:flex  px-32 py-8 rounded-2xl md:justify-between w-4/5 gap-5 mx-auto md:relative md:bottom-20 grid grid-cols-1 bg-white'>
      <article>
        <h1 className='font-semibold text-4xl'>2344</h1>
        <p>Happy Client</p>
      </article>
      <article>
        <h1 className='font-semibold text-4xl'>5644</h1>
        <p>app download</p>
      </article>
      <article>
        <h1 className='font-semibold text-4xl'>5734</h1>
        <p>Total Rates</p>
      </article>
      <article>
        <h1 className='font-semibold text-4xl'>344</h1>
        <p>Awards win</p>
      </article>
    </div>
  );
};

export default CountDiv;
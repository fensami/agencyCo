import React from 'react';

const Footer = () => {
  return (
    <div className='my-12'>
    <div className='grid grid-cols-1 md:gap-32 mb-5 md:grid-cols-3 w-11/12 mx-auto'>
    <article>
        <h1 className='text-4xl font-bold'>AgencyCo</h1>
        <p className='my-8'>Holisticly empower premium architectures without <br /> value-added ideas. Seamlessly evolve cross-platform experiences and open-source meta-services.</p>
      </article>

      <article>
        <h1 className='text-4xl font-medium'>Our location</h1>
        <p className='my-2'>Address: 121 King Melbourne</p>
        <p>Australia 3000</p>
        <p className='my-2'>Phone: +61 2 8376 6284</p>
        <p>Email: mail@example.com</p>
      </article>

      <article>
        <h1 className='text-4xl font-medium'>Quick links</h1>
        <p className='my-2'>About Us</p>
        <p>Contact Us</p>
        <p className='my-2'>Pricing</p>
        <p >Our Services</p>
      </article>
    </div>

      <div className='bg-slate-400 py-5 px-10'>
      <p>Copyrights © 2023. All rights reserved by AgencyCo</p>
      </div>
    </div>
  );
};

export default Footer;
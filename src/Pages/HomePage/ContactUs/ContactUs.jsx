import React from 'react';

const ContactUs = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 bg-[#f5f5f5] py-8 px-24 my-24'>
      <article>
        <h1 className='text-4xl font-semibold mb-5'>Contact with us</h1>
        <p>It's very easy to get in touch with us. Just use the contact <br /> form or pay us a visit for a coffee at the office. Dynamically <br /> innovate competitive technology after an expanded array <br /> of leadership.</p>

        <p>Head Office</p>
        <p className='mb-5'>121 King St, Melbourne VIC 3000, Australia</p>

        <div>
          <p className='mb-2'>Phone: +61 2 8376 6284</p>
          <p>Email : hello@yourdomain.com</p>
        </div>
      </article>


      <article>
        <h1 className='text-3xl font-medium mb-5'>Reach us quickly</h1>

        <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
          <input className='p-3 my-3' type="text" placeholder='Enter Name' />
          <input className='my-3 p-3' type="text" placeholder='Enter Email' />
          <input className='p-3' type="text" placeholder='Enter Name' />
          <input className='p-3' type="text" placeholder='Enter Name' />
        </div>

        <input className='mt-5 pb-48 pt-5 px-5 w-full' type="text" placeholder='message' name="" id="" />

        <button className='px-8 py-5 bg-blue-700 rounded-lg font-semibold text-white mt-8'>Send Message</button>
      </article>




     
    </div>
  );
};

export default ContactUs;
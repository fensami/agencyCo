import React from 'react';
import buisness from '../../../assets/businessImage.png'
import { FcAlarmClock } from 'react-icons/fc';


const AboutUs = () => {
  return (
   <div className='bg-slate-200'>
     <div className='grid w-11/12 py-8 grid-cols-1 md:grid-cols-2 my-24 mx-auto '>
      <article>
        <h1 className='text-xl font-bold text-[#f70]'>About Us</h1>
        <h2 className='text-5xl my-8'>We help drive your business forward faster</h2>
        <p className='text-lg'>Proactively syndicate open-source e-markets after low-risk high-yield synergy. Professionally simplify visionary technology before team driven sources.</p>

        <div className='flex mt-12'>
          <article>
            <div className='flex gap-4 items-center text-2xl mb-5'>
            <FcAlarmClock></FcAlarmClock>
            <p>Increase conversion</p>
            </div>
            <h1>Display recent conversions, build credibility and trust.</h1>
          </article>

          <article>
          <div className='flex gap-4 items-center text-2xl mb-5'>
            <FcAlarmClock></FcAlarmClock>
            <p>Product analytics</p>
            </div>
            
            <h1>A top promo bar that counts down until a few discounts.</h1>  </article>

        </div>
        <button className='bg-[#f70] text-white rounded-lg mt-8 md:mt-12 font-semibold text-xl py-5 px-10'>View details</button>
      </article>
      <article>
        <img src={buisness} className='md:w-3/4 w-4/6 mx-auto' alt="" />
      </article>
    </div>
   </div>
  );
};

export default AboutUs;
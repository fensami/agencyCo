import React from 'react';
import bannerImg from '../../../assets/bannerImage.png'

const Banner = () => {
  return (
    <div>
       <div className='banner'>
        <div className='kaku'>
          <div className='grid md:grid-cols-2 grid-cols-1'>
          <article className='text-white md:pl-36 pl-10 md:w-11/12 w-3/4'>
          <h1 className='md:font-bold md:text-5xl text-3xl md:pt-72 pt-40 mb-5 '>We are Digital Agency & Marketing</h1>
          <p className='md:text-2xl'>Quickly morph client-centric results through performance based applications. Proactively facilitate professional human capital for cutting-edge.</p>
          <button className='bg-[#f70] rounded-lg mt-8 md:mt-12 font-semibold text-xl py-5 px-10'>Get shot now</button>
          </article>

          <img src='http://agencyco.themetags.com/img/hero-app_development_02.svg' className='w-4/5 h-4/5 md:pt-48 pt-8'  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
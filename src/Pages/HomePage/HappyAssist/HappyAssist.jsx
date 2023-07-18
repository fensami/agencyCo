import React from 'react';
import './HappyAssist.css'
// import {DiGoogleAnalytics} from 'react-icons/di'
import { DiGoogleAnalytics } from 'react-icons/di';
import { TfiLayoutMediaLeftAlt, TfiEmail } from 'react-icons/tfi';
import {GiSpiderWeb } from 'react-icons/gi';
import {BiMobileVibration } from 'react-icons/bi';
import {SiAmazoncloudwatch } from 'react-icons/si';
// import { TfiEmail } from 'react-icons/tfi';


const HappyAssist = () => {
  return (
    <div>
      <div className='text-center my-12'>
      <h1 className='text-3xl md:text-5xl md:w-1/2 mx-auto mb-5'>We are happy to assist you all time moment Insights</h1>
      <p className='w-1/2 mx-auto text-xl'>Energistically enhance user-centric e-markets before client-focused initiatives. Enthusiastically reconceptualize proactive intellectual capital whereas top-line imperatives.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto'>
      <article className='mamu bg-white border px-12 py-8'>
        
        
          <div className=' rounded-lg w-20 px-4 py-3 mx-auto'>
          <DiGoogleAnalytics className='text-purple-900 text-5xl'></DiGoogleAnalytics>
          </div>
        
        
        <h1 className='text-2xl my-5'>Search engine optimization</h1>
        <p className='text-lg'>where we use search engines to market your product; through paid methods (Pay per Click (PPC) Services)</p>
      </article>

      <article className='mamu bg-white border px-12 py-8'>

      <div className=' rounded-lg w-20 px-4 py-3 mx-auto'>
          <TfiLayoutMediaLeftAlt className='text-blue-900  text-5xl'></TfiLayoutMediaLeftAlt>
          </div>
        {/* <TfiLayoutMediaLeftAlt className='text-5xl w-10 mx-auto text-blue-500'></TfiLayoutMediaLeftAlt> */}
        <h1 className='text-2xl my-5'>Social media marketing</h1>
        <p className='text-lg'>While browsing Facebook or Twitter or even Linkedin, you are subjected to advertisements.</p>
      </article>

      <article className='mamu bg-white border px-12 py-8'>
      <div className=' rounded-lg w-20 px-4 py-3 mx-auto'>
          <TfiEmail className='text-red-800  text-5xl'></TfiEmail>
          </div>
        <h1 className='text-2xl my-5'>Email marketing</h1>
        <p className='text-lg'>Email marketing is one of the most popular strategies offered by full-service digital marketing agencies.</p>
      </article>

      <article className='mamu bg-white border px-12 py-8'>
      <div className=' rounded-lg w-20 px-4 py-3 mx-auto'>
          <GiSpiderWeb className='text-blue-900  text-5xl'></GiSpiderWeb>
          </div>
        <h1 className='text-2xl my-5'>Web design and development</h1>
        <p className='text-lg'>Your website provides a place for interested users to learn more about your business, your products and services.

</p>
      </article>

      <article className='mamu bg-white border px-12 py-8'>
      <div className=' rounded-lg w-20 px-4 py-3 mx-auto'>
          <BiMobileVibration className='text-red-700  text-5xl'></BiMobileVibration>
          </div>
        <h1 className='text-2xl my-5'>Mobile app development</h1>
        <p className='text-lg'>We are also working in mobile App Development that is skillful and professional in developing a Mobile application</p>
      </article>

      <article className='mamu bg-white border px-12 py-8'>
      <div className=' rounded-lg w-20 px-4 py-3 mx-auto'>
          <SiAmazoncloudwatch className='text-blue-900  text-5xl'></SiAmazoncloudwatch>
          </div>
        <h1 className='text-2xl my-5'>Amazon affiliate marketing</h1>
        <p className='text-lg'>Thrive was founded on the conviction that businesses can successfully outshine their competitors with a strong website.</p>
      </article>
    </div>
    </div>
  );
};

export default HappyAssist;
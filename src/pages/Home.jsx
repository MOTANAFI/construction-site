import React from 'react';
import Hero from '../components/Hero';
import backgroundImage from '../assets/bg-img.jpg';
import { BsArrowRightShort } from 'react-icons/bs'
import bannerImage from '../assets/CTA-bg.jpg';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='max-w-7xl mx-auto md:flex mt-20 px-4 md:px-0'>
        <div className='md:w-1/2 md:mr-4 max-w-7xl mx-auto md:mb-0 mb-6'>
          <div className='py-8'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold py-4 leading-tight text-left'>
              Welcome to Concrete Constructions
            </h2>
            <div className='w-16 h-2 bg-[#ff702d] mb-6'></div>
            <h3 className='text-2xl md:text-3xl font-semibold leading-tight py-4'>
              Where We Build Your Visions
            </h3>
            <p className='text-base md:text-lg lg:text-xl leading-7 md:leading-8 lg:leading-9'>
              Write a warm welcoming message for visitors. You can mention all
              the benefits or services with some real examples. You can also
              state how you emphasize their well-being. This often shows your
              concern and increases the chances of conversion. Tell people a
              little more to attract. You can mention some contact details as
              shown below to get in touch with visitors.
            </p>
            <div className='widgets pt-10'>
              <p className='font-semibold tracking-wide'>Call Us Today</p>
              <p className='text-2xl font-semibold'>91 123-456-7890</p>
            </div>
          </div>
        </div>
        <div className='md:w-1/2 md:ml-4 relative'>
          <div className='border-4 border-[#ff702d] w-full h-auto md:sticky md:top-12'>
            <img
              src={backgroundImage}
              alt='Dolore quia minima vitae'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
     
{/* CTA SECTION */}
<div className='relative  text-grey py-20 my-20 max-w-[800px] mx-auto'>
      {/* Your image and overlay here */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto text-center'>
        <div className='w-16 h-2 bg-[#ff702d] text-center mx-auto mb-6'></div>
          <h2 className='text-2xl md:text-3xl font-semibold mb-2 md:mb-4'>
            Get Your Free Consultation
          </h2>
          <p className='text-sm md:text-base mb-4 md:mb-6'>
            You can use these sections to highlight the features of heading.
            Use these paragraphs to focus on the topic you want. Make sure
            you keep it short and attractive.
          </p>
          <button className='bg-[#ff702d] px-[30px] my-7 transition-all duration-300 text-white py-[18px] hover:bg-black inline-flex items-center'>
            Book An Appointment <BsArrowRightShort className='ml-2' />
          </button>
        </div>
      </div>
    </div>







    </div>
  );
};

export default Home;
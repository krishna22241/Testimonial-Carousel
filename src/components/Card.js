import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';



 const Card = (props) => {
    let review = props.review;
    
  return (
    <div className='flex flex-col  md:relative '>
        <div className='absolute top-[-6rem] z-[10] mx-auto'>
            <img 
            className='aspect-square rounded-full w-[120px] z-25'
            src={review.image}
            alt=""/>
            <div className='w-[120px] h-[120px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[6.5px]'></div>
        </div>

        <div className='text-center mt-7'>
            <p className=' tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft />
        </div>
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='text-center  flex flex-col items-center mt-4 text-violet-400'>
            <FaQuoteRight />
        </div>

       

    </div>
  )
}
 export default Card;
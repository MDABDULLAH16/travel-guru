import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='flex'>
      <div>
        <h1 className='text-6xl font-bold text-white'>COX'S BAZAR</h1>
        <p>
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button className='btn btn-warning px-12 font-semibold text-white'></button>
      </div>
      {/* carousel  */}
      <div>
        <div className='carousel w-full'>
          <div id='slide1' className='carousel-item relative w-full'>
            <img
              src='https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg'
              className=' h-48'
            />
            {/* button  */}
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide4' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide2' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

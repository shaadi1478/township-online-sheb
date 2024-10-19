import React from 'react';
import app1 from '../../assets/a1.png'
import app2 from '../../assets/a2.png'
import app3 from '../../assets/a3.png'
import app4 from '../../assets/a4.png'

const TextBlock = () => {
  return (
    <div className=' max-w-[1400px] mx-auto -mb-4'>
      <div>
        <div className='text-center space-y-4'>
        <h1 className='text-2xl md:text-5xl font-bold'>Township online seba</h1>
        <p className='md:text-xl text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur voluptates quidem velit. Possimus aliquid unde nostrum voluptate. Ea ex modi quam delectus maxime quidem at mollitia labore? Molestiae, natus!</p>
        </div>
        <div className='grid md:grid-cols-4 items-center grid-cols-2 md:-mt-20 -mt-11'>
          <img src={app1} alt="" />
          <img src={app2} alt="" />
          <img src={app3} alt="" />
          <img src={app4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
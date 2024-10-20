import React from 'react';
import app1 from '../../assets/a1.png'
import app2 from '../../assets/a2.png'
import app3 from '../../assets/a3.png'
import app4 from '../../assets/a4.png'

const TextBlock = () => {
  return (
<div className="max-w-[1400px] mx-auto mb-8">
  <div>
    <div className="text-center space-y-4">
      <h1 className="text-2xl md:text-5xl font-bold">Township Online Seba</h1>
      <p className="md:text-xl text-xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum consequatur voluptates quidem velit. Possimus aliquid unde nostrum voluptate. Ea ex modi quam delectus maxime quidem at mollitia labore? Molestiae, natus!
      </p>
    </div>
    <div className="grid md:grid-cols-4 grid-cols-2 items-center gap-4 md:-mt-2">
      <img
        src={app1}
        alt="App 1 preview"
        className="transition-all duration-300 hover:w-[110%] hover:shadow-lg"
      />
      <img
        src={app2}
        alt="App 2 preview"
        className="transition-all duration-300 hover:w-[110%] hover:shadow-lg"
      />
      <img
        src={app3}
        alt="App 3 preview"
        className="transition-all duration-300 hover:w-[110%] hover:shadow-lg"
      />
      <img
        src={app4}
        alt="App 4 preview"
        className="transition-all duration-300 hover:w-[110%] hover:shadow-lg"
      />
    </div>
  </div>
</div>


  );
};

export default TextBlock;
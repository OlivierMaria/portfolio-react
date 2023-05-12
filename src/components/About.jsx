import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, magnam!
          Ducimus, non adipisci amet maiores, quis asperiores dolores, quas ea
          doloremque eaque necessitatibus est libero. Suscipit maiores minima
          dolorum eligendi?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          eos saepe fugiat impedit libero eaque esse error vitae perspiciatis?
          Accusamus cum nobis, aliquam nostrum quod consectetur porro numquam
          odio eligendi.
        </p>
      </div>
    </div>
  );
};

export default About;

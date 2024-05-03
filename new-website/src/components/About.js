import React from "react";

// link to create download for google drive resume: https://pbkvoeoo.paperform.co/
//
export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#d3f8d3' }}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center snap-mandatory">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-15 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-7xl text-5xl mb-4 font-medium text-black">
            Hey, Im Javi,
          </h1>

          <h1 className="lg:inline-block sm:text-4xl text-2xl mb-4 font-medium">
            Software Dev & Finance Professional 
          </h1>

          <div className="flex justify-center py-10">

            <a
              href="https://drive.google.com/file/d/1fQ_J2xU-Axjr2WqkLcVIeS31xk2ebyJy/view"
              target="_blank"
              className="ml-4 inline-flex text-white-400 bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-white-700 hover:text-white rounded text-lg"
              tyle={{ backgroundColor: 'rgb(169 89 213)' }}
            >
              Check out my Master Resume Here
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full"
            alt="hero"
            src="profile1.png"
          />
        </div>
      </div>
    </section>
  );
}

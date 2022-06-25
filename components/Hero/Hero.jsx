import React from 'react';
import Typed from 'react-typed';

const images = ["/image/cubes/czarna.jpg", "/image/hero/vanga.jpg", "/image/cubes/szaro-ruda.jpg"];

const delay = 3500;
const Hero = ({mainRef}) => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
  
    function resetTimeout() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),delay
      );
  
      return () => {
        resetTimeout();
      };
    }, [index]);

    const handleScroll = (ref) => {
      window.scrollTo({
        top: ref.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    };
  return (
<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    
    <div class="relative pt-1 px-4 sm:px-6 lg:px-8"></div>

      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
       fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>

      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold sm:text-lg md:text-5xl">
            <span class="block">Szukasz</span>
            <Typed
            className='md:text-4xl sm:text-xl text-2xl font-bold md:pl-1 pl-1 block text-indigo-600 xl:inline'
            strings={['kostki granitowej czarnej?', 'kostki granitowej czerwonej? ', 'kostki granitowej szaro-rudej?']}
            typeSpeed={50}
            backSpeed={90}
            loop
          />
          </h1>
          <p class="mt-3 text-base text-gray-500  sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Dewizą firmy Scanstone jest: wysoka jakość, szybkość realizacji oraz indywidulane podejście do klienta.</p>
          <div class="mt-5 sm:mt-8 sm:flex xs:mb-4 sm:justify-center lg:justify-start">
            <div class="rounded-md shadow mb-4  hover:-translate-y-1 hover:shadow-lg ">
              <a href="#" onClick={() => {handleScroll(mainRef.current);}} class="w-full flex items-center justify-center px-8 py-3 border border-transparent 
              text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Nasza Oferta</a>
            </div>
            <div class="rounded-md md:mt-0  hover:-translate-y-1  md:ml-8 sm:ml-0 sm:mt-4 ">
              <a href="/contact" class="w-full flex items-center justify-center  px-8 py-3 border border-transparent 
              text-base font-medium rounded-md text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-indigo-900 md:py-4 md:text-lg md:px-10">Kontakt</a>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/4 lg:mr-32 overflow-hidden lg:pt-14 sm:pt-1">
  <div style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} className="whitespace-nowrap ease-in duration-1000">
  {images.map((image, index) => (
        <img key={index} className="inline-block h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={image}/>
  ))}
   </div>
</div>
</div>
  );
};

export default Hero;

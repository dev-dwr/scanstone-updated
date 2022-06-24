import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO/SEO";
import Cubes from "../components/Cubes/Cubes"
import Products from "../components/Products/Products"
import { useRef } from "react";
import Testimonials from "../components/Testimonials/Testimonials"
import Footer from "../components/Footer/Footer";

const Home = () => {
  const mainRef = useRef(null);
  return (
    <>
      <SEO/>
      <Navbar />
      <Hero  mainRef={mainRef}/>
      <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
        <div className='mt-16 space-y-20'>
        <Cubes mainRef={mainRef}/>
        <Products/>
        <Testimonials/>
        <Footer/>
        </div>
      </main>
     
      </>
  );
};

export default Home;

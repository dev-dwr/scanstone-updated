import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SEO from "../components/SEO/SEO";
import Cubes from "../components/Cubes/Cubes"
const Home: NextPage = () => {
  return (
    <>
      <SEO/>
      <Navbar />
      <Hero />
      <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
        <div className='mt-16 space-y-20'>
        <Cubes />
        </div>
      </main>
     
      </>
  );
};

export default Home;

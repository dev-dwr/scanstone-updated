import SEO from "../components/SEO/SEO"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import ContactComp from "../components/Contact/ContactComp";

const Contact = () => {
    return (
      <>
        <SEO/>
        <Navbar />
        <main className='mx-auto max-w-screen-xl mb-32 px-1 sm:px-8'>
          <div className='mt-0 space-y-0'>
              <ContactComp/>
              
          </div>
        </main>
        <Footer/>
        </>
    );
  };
  
  export default Contact;
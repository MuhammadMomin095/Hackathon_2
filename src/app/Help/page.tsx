"use client"


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import FAQ from "../components/FAQ";
import Related from "../components/Related";
import PaymentOptions from "../components/PaymentOptions";




const Help = () => {
    return (


        <div>
         <Navbar />

         <section className="relative py-10 flex flex-col lg:flex-row w-full h-full items-center p-5">
        <div className="w-full max-w-screen-xl mx-auto">
          <h1 className="text-center text-[32px] font-medium text-[#111]">GET HELP</h1>
          <div className="relative flex items-center border rounded justify-center w-full max-w-[457px] h-auto mx-auto mt-4">
            <input
              className="w-full h-[56px] text-[15px] text-center text-[#757575] rounded px-4"
              placeholder="What can we help you with?"
            />
          </div>
        </div>
      </section>



    <PaymentOptions />
      <FAQ />
 
<Related />
   

 

    <Contact />

<Footer />
        

        </div>




        );
};

export default Help;
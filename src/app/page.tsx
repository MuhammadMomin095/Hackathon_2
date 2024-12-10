import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Icon from './components/Icon';
import Header from './components/Header';
import Essential from './components/Essential';
import Feature from './components/Feature';
import Miss from './components/Miss';
import Gear from './components/Gear';
import Footer from './components/Footer';


import Link from 'next/link';
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";  








export default function Home() {
  return (
  <div>  
  

      <Navbar />
      <Header />
      <Hero />
      <Feature />
      <Gear />
      <Miss />
      <Essential />
      <Icon />
    

     

      
      


  </div>
  );
}

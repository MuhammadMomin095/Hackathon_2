import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Icon from './components/Icon';
import Header from './components/Header';
import Essential from './components/Essential';
import Feature from './components/Feature';
import Miss from './components/Miss';
import Gear from './components/Gear';
import Footer from './components/Footer';



export default function Home() {
  return (
  <div className="flex flex-col min-h-screen">  
  

      <Navbar />
      <Header />
      <Hero />
      <Feature />
      <Gear />
      <Miss />
      <Essential />
      <Icon />
      <Footer />

    

     

      
      


  </div>
  );
}

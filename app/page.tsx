import Navbar from '../components/navbar/navbar';
import Header from '../components/Header/header';
import About from '../components/About/about';
import Services  from '../components/Services/services';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';

export default function Home() {
  return (
   <div>
    <Navbar />
      <Header/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
   </div>
      
   
    
  
  );
}

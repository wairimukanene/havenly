// Home.tsx

import Navbar from '../components/navbar/navbar';
import Header from '../components/Header/header';
import About from '../components/About/about';
import Services  from '../components/Services/services';
import Contact from '../components/Contact/contact';
import Footer from '../components/Footer/footer';
// import BackToTop from '../components/Backtotop/back';

export default function Home() {
  return (
   <div className="pt-30">
    <Navbar />
      <div id="header"><Header/></div>
      <div id="about"><About/></div>
      <div id="services"><Services/></div>
      <div id="contact"><Contact/></div>
      <Footer/>
      {/* <BackToTop/> */}
   </div>
  );
}

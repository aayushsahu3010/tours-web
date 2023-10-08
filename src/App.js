 import React from 'react' 
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Activites from './Components/Activites';
import Bookings from './Components/Bookings';
import Gallery from './Components/Gallery';
import Form from './Components/Form';
import Footer from './Components/Footer';


function App() {
  return (
    <div >
   <Topbar/>
   <Navbar/>
   <Hero/>
   <Activites/>
   <Bookings/>
   <Gallery/>
   <Form/>
   <Footer/>
    </div>
  );
}

export default App;

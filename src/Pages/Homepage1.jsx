import React from 'react';

import Header from './Header';

 import Navbar1 from './Navbar1';
 import Navbar2 from './Navbar2';
 import Carousel1 from './Carousel1';
 import Card1 from './Card1';           
 import Footer from './Footer';    
import Carousel2 from './Carousel2';
import Content1 from './Content1';
import Content2 from './Content2';
import Card2 from './Card2';
  

function Homepage1() {
    return(
        <div>
           <Header  />
           <Navbar1  />
           <Navbar2  /><br></br><br></br><br></br><br></br>
           <Carousel1  /><br></br><br></br><br></br><br></br>
           <div><p>Simple steps to online success</p></div>
           <Carousel2  /><br></br><br></br><br></br><br></br>
           <Content1   /><br></br><br></br><br></br><br></br>
           <Card1 /><br></br><br></br><br></br><br></br>
           <Content2  /><br></br><br></br><br></br><br></br>
           <Card2  /><br></br><br></br><br></br><br></br>
           <Navbar2  /><br></br><br></br><br></br><br></br>
           
           <Footer  />   
       </div>
    )
}

export default Homepage1
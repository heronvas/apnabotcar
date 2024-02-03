import React , {useState} from 'react' //, {useState}
import './stylesnav.css';
import Sidenav from './Sidenav';
import  {ReactComponent as CarLogo}  from './/images/carwale.svg';
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  const isMobile = window.innerWidth <= 768;
  const [showNav, setNav]=useState(true);

  
  
  //let showNav = true;
  const toggle = () => {
    console.log("button clicked");
    setNav(!showNav);
    console.log(showNav);

  };

  

  
  console.log("isMobileDevice");
  console.log(isMobile);

  return (
    <>
    <div className='nav'>
      { isMobile ? null : <RxHamburgerMenu onClick={toggle}  className='menu'/>}
    
      <CarLogo className='carlogo'/>
    </div>
    
    { isMobile ? null : <Sidenav  visible={showNav}/>}
    </>
  )
}

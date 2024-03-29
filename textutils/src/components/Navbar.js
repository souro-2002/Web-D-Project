import React,{useState} from 'react'
import light_logo from '../light_logo.png'
import dark_logo from '../dark_logo.png'
import light from '../light.png'
import dark from '../dark.png'
export default function Navbar() {
  const [click, setclick] = useState(0)
  const handleDark=()=>{
    if(!click){
      document.body.style.background="gray"
      document.body.querySelector(".container textarea").style.border="4px solid black";
    }
    else{
      document.body.style.backgroundColor="white"
      document.body.querySelector(".container textarea").style.border="4px solid black";
    }
    setclick(!click)
  }
  return (
    <>
        <nav className={click?"dark":""}>
            <img src={click?dark_logo:light_logo} alt="TextUtils"/>
            <ul className='nav__list'>
                <li>Home</li>
            </ul>
            <img onClick={handleDark} src={click?light:dark} alt="Dark Mode" className={click?"mode__logo_sun":"mode__logo"}/>
        </nav>
    </>
  )
}

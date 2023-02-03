import './App.css';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import sitar from "./sitar.png";
import tabla from "./tabla.png";
import flute from "./flute.png";
import { useState } from 'react';
function App() {
  const [one, setone] = useState(0)
  const [two, settwo] = useState(0)
  const [three, setthree] = useState(0)
  const [four, setfour] = useState(0)
  const [five, setfive] = useState(0)
  const handleOne=()=>{
    if(one) setone(0)
    else setone(1)
  }
  const handleTwo=()=>{
    if(two) settwo(0)
    else settwo(1)
  }
  const handleThree=()=>{
    if(three) setthree(0)
    else setthree(1)
  }
  const handleFour=()=>{
    if(four) setfour(0)
    else setfour(1)
  }
  const handleFive=()=>{
    if(five) setfive(0)
    else setfive(1)
  }
  return (
    <>
      <Navbar/>
      <div className="main-body">
        <Timeline sitar={sitar} tabla={tabla} flute={flute}/>
      </div>
    </>
  );
}

export default App;

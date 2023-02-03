import React, { useState } from 'react'
import hariprasad from "../hariprasad.webp";
import ravi_shankar from "../ravi_shankar.webp";
import bismillah from "../bismillah.jpg";
import ustad_ali_akbar from "../ustad_ali_akbar.webp";
import zakir_hussain from "../zakir_hussain.webp";
import "../App.css"
function Timeline(props) {
  const [one, setone] = useState(false)
  const [two, settwo] = useState(false)
  const [three, setthree] = useState(false)
  const [four, setfour] = useState(false)
  const [five, setfive] = useState(false)
  const handleHoverOne = (e) => {
    setone(!one)
  }
  const handleHoverTwo = (e) => {
    settwo(!two)
  }
  const handleHoverThree = (e) => {
    setthree(!three)
  }
  const handleHoverFour = (e) => {
    setfour(!four)
  }
  const handleHoverFive = (e) => {
    setfive(!five)
  }
  return (
    <>
      <h1 className="heading">TIMELINE</h1>
      <div className="container-fluid" id='main'>
        <div className="card left" style={{ width: "50%" }} >
          <img src={hariprasad} className="card-img-top" alt="Image Not Found" />
          <img className='icon' onClick={handleHoverOne} src={props.flute} alt="flute" />
          <div style={
            one ? { visibility: "visible" } : {}
          } className='card-body'>
            <h6 className="card-title">Pandit Hariprasad Chaurasia</h6>
            <h6 className="mb-2">2nd February 2023</h6>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit dicta dolor odit saepe optio officiis fuga consequatur doloremque! Reiciendis illum et totam, tempore placeat nihil blanditiis reprehenderit eos enim voluptates soluta, maxime vel!</p>
          </div>
          <div className="arrow-right arrow"></div>
        </div>

        <div className="card right" style={{ width: "50%" }} >
          <img src={ravi_shankar} className="card-img-top" alt="Image Not Found" />
          <img className='icon' onClick={handleHoverTwo} src={props.sitar} alt="sitar" />
          <div className="arrow-left arrow"></div>
          <div style={
            two ? { visibility: "visible" } : {}
          } className='card-body'>
            <h6 className="card-title">Pandit Ravi Shankar</h6>
            <h6 className="mb-2">3rd February 2023</h6>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur sunt ipsa veritatis. Autem adipisci, maxime porro totam recusandae nulla, a labore iste nemo, molestias mollitia delectus repudiandae alias perferendis eos vitae consequuntur numquam!</p>
          </div>
        </div>

        <div className="card left" style={{ width: "50%" }} >
          <img src={bismillah} className="card-img-top" alt="Image Not Found" />
          <img className='icon' onClick={handleHoverThree} src={props.flute} alt="flute" />
          <div className="arrow-right arrow"></div>
          <div style={
            three ? { visibility: "visible" } : {}
          } className='card-body'>
            <h6 className="card-title">Pandit BisMillah Khan</h6>
            <h6 className="mb-2">4th February 2023</h6>
            <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias laborum natus ex, accusantium error eveniet tempore at! Alias delectus, odit expedita perferendis ratione harum provident ut. Alias aut fugit qui magnam itaque perferendis.</p>
          </div>
        </div>

        <div className="card right" style={{ width: "50%" }} >
          <img src={ustad_ali_akbar} className="card-img-top" alt="Image Not Found" />
          <img className='icon' onClick={handleHoverFour} src={props.sitar} alt="Sitar" />
          <div className="arrow-left arrow"></div>
          <div style={
            four ? { visibility: "visible" } : {}
          } className='card-body'>
            <h6 className="card-title">Ustad Ali Akbar</h6>
            <h6 className="mb-2">5th February 2023</h6>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga recusandae molestias quasi voluptatem exercitationem eligendi error fugiat nam mollitia voluptate delectus at aperiam, eum aliquam, earum ipsam autem iure ut facere doloremque soluta perspiciatis labore quam neque? Eligendi, tempora saepe.</p>
          </div>
        </div>

        <div className="card left" style={{ width: "50%" }} >
          <img src={zakir_hussain} className="card-img-top" alt="Image Not Found" />
          <img className='icon' onClick={handleHoverFive} src={props.tabla} alt="tabla" />
          <div className="arrow-right arrow"></div>
          <div style={
            five ? { visibility: "visible" } : {}
          } className='card-body'>
            <h6 className="card-title">Ustad Zakir Hussain</h6>
            <h6 className="mb-2">6th February 2023</h6>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam. Voluptatum atque quo porro ad adipisci vel corporis cumque mollitia modi expedita cupiditate repellat distinctio, ipsum blanditiis hic, ducimus alias earum, quia officiis impedit possimus qui rem doloremque excepturi? Optio provident facilis repudiandae cumque id numquam nam perspiciatis officiis culpa.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Timeline
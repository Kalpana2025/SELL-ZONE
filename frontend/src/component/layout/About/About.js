import React from 'react'
import "./aboutSection.css";
import { Typography} from "@material-ui/core";
import pileOfCycles from "../../../images/cyclesPile1.png";
import pileOfCycles1 from "../../../images/cyclesPile2.png";
import pileOfCoolers from "../../../images/PileOfCoolers.png";
import gurujis from "../../../images/Guruji.png";
// import kalpana from "../../../images/Photo.png";

// import MetaData from '../MetaData';


const About = () => {
  return (

    <div className='aboutContainer'>
      <div className='aboutHeading'>
        <h1>About Us</h1>
        <p>A very common problem is in campus that, there is no such platform to sell or buy used articles.
          Though articles are in good condition to use but in absence of contact between buyer and seller,
          it makes a pile of articles in campus.
          This website may solve this problem.

        </p>
      </div>

      <div className='container'>
        <section className='aboutSection'>
          <div className='about-image'>
            <img src={pileOfCycles} alt='PileOfCycles' />
            <img src={pileOfCoolers} alt='PileOfCoolers' />
            <img src={pileOfCycles1} alt='PileOfCycles1' />
          </div>

          <div className='about-content'>
            <h2>What Picture Says</h2>
            <p>
              This picture is only an example of used article,
              imagine once these cycles and coolers were in running condition but a seller couldn't succeed to sell
              and a buyer couldn't succeed to buy, because no sell and buy platform was there.

            </p>
          </div>
        </section>
      </div>

      <div className='profiles'>
      <div className='aboutProfile'>
       <img
          src={gurujis}
          alt="Founder"
        />
        <div>
        <Typography style={{ color: "#cb3c88", margin:"2vmax 0 0 0"}}>Satish Kumar </Typography>
        <span>Mentor</span>
      </div>
       </div>

       <div className='aboutProfile'>
       <img
          src={gurujis}
          alt="Co-Founder"
        />
        <div>
        <Typography style={{ color: "#cb3c88", margin:"2vmax 0 0 0"}}>Kalpana Meena</Typography>
        <span></span>
      </div>
       </div>

       </div>

    </div >
  )
}

export default About
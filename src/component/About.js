import React from 'react';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import floorHeatimg from '../image/about01.jpeg';
// import Typography from '@mui/material/Typography';
import aboutus from '../image/about02.jpeg';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import VerifiedIcon from '@mui/icons-material/Verified';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { Colors } from '../style';

const missions = [
  {
    title: 'Expertise',
    icon: <AssuredWorkloadIcon style={{ color: Colors.orange2 }} />,
    des: 'Our technicians are highly trained, licensed, and dedicated to delivering excellent service.'
  },
  {
    title: 'Quality',
    icon: <VerifiedIcon style={{ color: Colors.orange2 }} />,
    des: 'We use only the best materials and equipment, ensuring that your HVAC systems are durable and effective.'
  },
  {
    title: 'Customer Service',
    icon: <HeadsetMicIcon style={{ color: Colors.orange2 }} />,
    des: 'Your satisfaction is our top priority. We are available 24/7 for any emergency services you may need.'
  },
  {
    title: 'Sustainability',
    icon: <RecyclingIcon style={{ color: Colors.orange2 }} />,
    des: 'We are committed to providing energy-efficient solutions that are both effective and eco-friendly.'
  },
]

const ourMission = (obj) => {
  return (
    <div style={styles.mission} key={obj.title}>
      <div style={{ padding: '20px', textAlign: 'left' }}>
        {obj.icon}
        <h3>{obj.title}</h3>
        <p style={{ color: Colors.lightgrey }}>
          {obj.des}
        </p>
      </div>

    </div>
  )
}

const service = [
  {
    title: 'Furnace Installation and Repair',
    des: 'Keep your home or office cozy during the coldest months of the year with our efficient furnace services.'
  },
  {
    title: 'Air Conditioning (AC)',
    des: 'Stay cool and comfortable with our air conditioning installation, maintenance, and repair services.',
  },
  {
    title: 'Humidifiers',
    des: 'Maintain ideal indoor humidity levels for better health and comfort.',
  },
  {
    title: 'Water Heaters',
    des: 'Experience uninterrupted hot water supply with our reliable water heating solutions.',
  },
  {
    title: 'Tankless Water Heaters',
    des: 'Enjoy on-demand hot water while saving space and energy.',
  },
  {
    title: 'Floor Heating',
    des: 'Step onto warm floors even in the midst of winter with our floor heating solutions.',
  },
  {
    title: 'Ductless AC',
    des: 'Cool down your space with efficient and flexible ductless air conditioning systems.',
  },
  {
    title: 'Heat Pumps',
    des: 'Get the best of both worlds with heat pumps that can heat or cool your spaces as required.',
  },
  {
    title: 'Snow Melting Systems',
    des: 'Say goodbye to manual snow removal with our advanced snow melting systems for driveways and walkways.',
  },
  {
    title: 'Pool Heaters',
    des: 'Extend your swimming season by keeping your pool at a comfortable temperature.',
  },
  {
    title: 'Ductwork',
    des: 'Ensure efficient airflow and improve your HVAC system\'s efficiency with our professional ductwork services.',
  },
]

const ourService = (obj) => {
  return (
    <div style={styles.mission} key={obj.title}>
      <div style={{ padding: '20px', textAlign: 'left' }}>
        {/* {obj.icon}
        <h3>{obj.title}</h3>
        <p style={{ color: Colors.lightgrey }}>
          {obj.des}
        </p> */}
        <Card sx={{ width: 100 }}>
          Test
        </Card>
      </div>

    </div>
  )
}


function About() {

  return (
    <div style={styles.container} className='home-container'>
      <div className='cover-img-container'
        style={{
          height: '100vh',
          // backgroundImage: `url(${floorHeatimg}) `,
          // background: `linear-gradient(315deg, #7E889D 3%, #FFF7F0 38%, #C2C9D7 68%, #9D7378 98%)`,
          background: `linear-gradient(90deg, ${Colors.white_02}, ${Colors.skyblue_02} )`,
          animation: `gradient 15s ease infinite`,
        }}>
        <div className='text-container'
          style={styles.textContainer}>
          <h1 style={{
            display: 'block',
            color: Colors.dark,
          }}>
            Your trusted<br /> HVAC service provider
          </h1>
        </div>
      </div>

      <div style={styles.missionCont}>
        <h2>Why Choose Us?</h2>
        <div style={styles.rowContainer}>
          {missions.map((obj) => ourMission(obj))}
        </div>
      </div>
      <div style={{ display: 'flex', padding: '10%', justifyContent: 'center', alignItems: 'center' }}>
        <img alt='' src={aboutus} style={{ transform: ``, width: '50%' }} />
        <div style={{ width: '40%', backgroundColor: Colors.skyblue_01, color: Colors.white, marginLeft: '2%' }}>
          <div style={{ padding: '35px', textAlign: 'left', height: '80%', }}>
            <h1>About us</h1>
            <p>
              Founded in 2013, we have been serving the GTA area with unparalleled dedication and workmanship. Our team of certified technicians is equipped with the latest tools and knowledge to offer you the most efficient and reliable HVAC services available.<br /><br />
              We understand that every home and business is different, and we customize our solutions to fit your unique needs. Our mission is to provide top-quality comfort solutions that not only meet but exceed your expectations.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1>Services</h1>
        <div style={styles.rowContainer}>
          {service.map((obj) => ourService(obj))}
        </div>
      </div>
    </div>
  )
}

export default About;


const styles = {
  container: {
    textAlign: 'center',
    color: Colors.dark,
  },
  textContainer: {
    position: 'absolute',
    zIndex: 1,
    top: '30%',
    left: '50%',
    transform: `translate(-50%, 50%)`,
    width: '100%',
    color: Colors.dark,
  },
  img: {
    width: '100%',
    zIndex: 0,
  },
  missionCont: {
    color: Colors.dark,
    alignItem: 'center',
    alignText: 'center',
  },
  mission: {
    width: '200px',
    border: '1px solid',
    borderColor: Colors.borderlight,
  },
  rowContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    gap: '10px',
    justifyContent: 'space-evenly'
  }
}
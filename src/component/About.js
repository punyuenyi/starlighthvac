import React from 'react';
// import starlight from '../image/starlight.png';
// import img1 from '../image/01.jpeg';
// import img2 from '../image/02.jpeg';
import img3 from '../image/03.jpeg';
// import img4 from '../image/04.jpeg';
import img5 from '../image/05.jpeg';
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


function About() {

  return (
    <div style={styles.container}>
      <div style={{
        backgroundImage: `url(${img5}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '60vh'
      }}>
        <h1 style={{ 
          position: 'absolute', 
          zIndex: 1, 
          top: '12%', 
          right: '10%', 
          color: Colors.dark, textAlign: 'right', width: '100%' }}>
          Your trusted<br/> HVAC service provider
        </h1>
      </div>
      <div style={styles.missionCont}>
        <h2>Why Choose Us?</h2>
        <div style={styles.rowContainer}>
          {missions.map((obj) => ourMission(obj))}
        </div>
      </div>
      <div style={{ display: 'flex', padding: '10%', justifyContent: 'center', alignItems: 'center' }}>
        <img alt='' src={img3} style={{ transform: `` }} />
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
    </div>
  )
}

export default About;


const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
    color: Colors.dark,
  },
  img: {
    width: '100%',
    zIndex: 0,
  },
  // title: {
  //   // position: 'absolute',
  //   // top: '40%',
  //   // left: '60%',
  //   zIndex: 1,
  // },
  missionCont: {
    color: Colors.dark,
    alignItem: 'center',
    alignText: 'center',
  },
  mission: {
    maxWidth: '18%',
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
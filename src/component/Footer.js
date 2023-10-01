import React from 'react';
import { Colors } from '../style';
// import logo from './../image/starlight_nobg.png';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const about = [
  { icon: <PhoneIcon />, value: '+1 647 613 8221' },
  { icon: <MailOutlineIcon />, value: 'hvac.starlight@gmail.com' }
]


const renderDetail = (obj) => {
  return (
    <div key={obj.value} style={{
      // width: '100%', 
      marginTop: '20px',
      // marginBottom: '20px',
      display: 'flex',
      // backgroundColor: 'yellow'
    }}>
      <div style={{ color: Colors.skyblue_01 }}>
        {obj.icon}
      </div>
      <div style={{
        marginLeft: '20px',
        color: Colors.dark
      }}>
        {obj.value}
      </div>
    </div>
  )
}



function Footer() {
  return (

    <div>
      <div style={styles.container}>
        <div className='verticalContainer' style={styles.vertiaclContainer}>
          {about.map((obj) => renderDetail(obj))}
          {/* <div style={{display: 'flex', alignItems: 'center', color: Colors.skyblue_01}}>
            <img src={logo} alt='' style={styles.icon} />
            <h2 style={{marginLeft: '15px'}}>
              STARLIGHTHVAC
            </h2>
          </div> */}
        </div>
        <div className='verticalContainer' style={styles.vertiaclContainer}>
          facebook & instagram
        </div>
      </div>
      <div style={styles.btmBar}>
        <p style={{ marginLeft: '3%', }}>
          STARLIGHT HVAC @ 2023. All Right Reserved
        </p>
      </div>
    </div>

  )
}

export default Footer;


const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    // alignItems: 'flex-end',
    // height: '300px',
    // backgroundColor: 'pink',
    border: '1px solid'
  },
  vertiaclContainer: {
    marginLeft: '3%',
    marginBottom: '3%',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: 'pink',
    width: '100%',
  },
  btmBar: {
    width: '100%',
    height: '20%',
    backgroundColor: Colors.skyblue_01,
    color: Colors.white,
    display: 'flex',
  },
  icon: {
    height: '50px',
    width: '50px',
  }
}
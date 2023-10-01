import React from 'react';
import { Colors } from '../style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const about = [
  { icon: <LocationOnIcon />, value: 'Toronto, ON, Canada' },
  { icon: <PhoneIcon />, value: '+1 647 613 8221' },
  { icon: <MailOutlineIcon />, value: 'hvac.starlight@gmail.com' }
]


const renderDetail = (obj) => {
  return (
    <div key={obj.value} style={{
      marginTop: '20px',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ color: Colors.lightgrey, }}>
        {obj.icon}
      </div>
      <div style={{
        marginLeft: '10px',
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
        </div>
        <div className='verticalContainer' style={styles.vertiaclContainer}>
          <p style={{fontSize: '12px'}}>FOLLOW US:</p>
          <div className='followContainer' style={styles.followContainer}>
            <a href='https://www.instagram.com/starlight_hvac/' target="_blank" rel="noreferrer"
              style={styles.link}>
              <InstagramIcon style={{ color: Colors.lightgrey, marginRight: '10px' }} />
            </a>
            <a href='https://www.facebook.com/profile.php?id=100091852681814' target="_blank" rel="noreferrer"
              style={styles.link}>
              <FacebookRoundedIcon style={{ color: Colors.lightgrey, marginRight: '10px' }} />
            </a>
          </div>
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
    borderTop: '0.1px solid ' + Colors.lightgrey,
  },
  vertiaclContainer: {
    marginLeft: '3%',
    marginBottom: '3%',
    display: 'flex',
    flexDirection: 'column',
    color: Colors.skyblue_02,
    width: '100%',
    fontSize: '12px'
  },
  followContainer: {
    // marginLeft: '3%',
    marginBottom: '3%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // backgroundColor: 'pink'
  },
  link: {
    textDecoration: 'none',
    color: Colors.dark,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
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
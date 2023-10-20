import React from 'react';
import { Button } from '@mui/material';
import { Colors } from '../style';
import logo from './../image/starlight_nobg.png';


const sepPage = [
  {
    href: '/',
    btnText: 'About Us'
  },
  {
    href: '/projects',
    btnText: 'What We Do',
  },
  {
    href: '/contact',
    btnText: 'Contact Us',
    color: Colors.orange2,
  }

]


function Header() {
  return (
    <div className='navBar' style={styles.navBar}>
      <div style={styles.leftContainer}>
        <img src={logo} alt='' style={styles.icon} />
        <div className='navEle' style={styles.name}>STARLIGHT HVAC</div>
      </div>
      <div style={styles.rightContainer}>
        {sepPage.map((obj) => {
          return (
            <Button style={{...styles.links, color: obj?.color ?? Colors.skyblue_01}} href={obj.href}> {obj.btnText}</Button>
          )
        })}
      </div>
    </div>
  )
}

export default Header;

const styles = {
  navBar: {
    width: '100%',
    height: '6%',
    backgroundColor: Colors.navbar,
    color: Colors.skyblue_01,
    position: 'fixed',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    zIndex: 10.

  },
  name: {
    fontWeight: 600,
    fontSize: 16,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    marginLeft: '3%',
    // backgroundColor:'blue'
  },
  rightContainer: {
    // width: '6%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '20%',
    fontSize: '1rem',
    color: Colors.black,
  },
  links: {
    margin: '5px',
    zIndex: 10,
  },
  icon: {
    height: '80%', 
    margin: '10px'
  }
}

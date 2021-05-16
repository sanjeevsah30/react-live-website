
import React from 'react';
import Common from './Common'
import { NavLink } from 'react-router-dom';
const Home = ()=> {
  return(
      <Common  
      name2="Sanjeev Geeky"
      name1="Grow your Buiness With Us"
          visit="/About"
          img="https://image.freepik.com/free-vector/cartoon-illustration-man-sitting-rocket-flying_262129-823.jpg"
          buttonname="Get Started"
      />
  );
}
export default Home;

import React from 'react'
import Common from './Common';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Common
        title="Wellcome to About page"
        img="https://st2.depositphotos.com/4399457/10789/i/450/depositphotos_107894292-stock-photo-beautiful-girl-works-at-a.jpg"
        visit="/contact"
        btName="Contact Now"
      />
    </>
  );
}

export default About

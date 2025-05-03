// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactGetInTouch from './ContactGetInTouch';
import ReachOut from './ReachOut';

const Contact = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <ContactGetInTouch />
      <ReachOut />
      <Footer/>
    </div>
  )
}

export default Contact
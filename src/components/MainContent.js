import React from 'react';
import Home from '../sections/Home';
import Services from '../sections/Services';
import Testimonials from '../sections/Testimonials';
import Repainting from '../sections/Repainting';
import Express from '../sections/Express';
import About from '../sections/About';

function MainContent() {
  return (
    <div>
      <section id="home"><Home /></section>
      <section id="services"><Services /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="repainting"><Repainting /></section>
      <section id="express"><Express /></section>
      <section id="about"><About /></section>
    </div>
  );
}

export default MainContent;
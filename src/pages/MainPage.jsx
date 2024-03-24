import Container from 'components/Container';
import { NavBar } from 'components/NavBar';
import hero from '../assets/img/hero.png';

import React from 'react';
// import { Sidebar } from 'components/Sidebar';

const MainPage = () => {
  return (
    <Container>
      <NavBar />
      <section className="main-section">
        <h1>This is BEST STORE to rent CAMPERS!</h1>
        <img src={hero} alt="Hero" />
      </section>
    </Container>
  );
};

export default MainPage;

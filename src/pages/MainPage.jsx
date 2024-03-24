import Container from 'components/Container';
import { NavBar } from 'components/NavBar';

import React from 'react';
// import { Sidebar } from 'components/Sidebar';

const MainPage = () => {
  return (
    <Container>
      <NavBar />
      <main>
        <section className="main-section">
          <h1>This is BEST STORE to rent CAMPERS!</h1>
        </section>
      </main>
    </Container>
  );
};

export default MainPage;

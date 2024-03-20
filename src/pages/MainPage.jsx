import Container from 'components/Container';
import { Sidebar } from 'components/Sidebar';
import React from 'react';
// import { Sidebar } from 'components/Sidebar';

const MainPage = () => {
  return (
    <Container>
      <aside>
        <Sidebar />
      </aside>
      <section className="main-section">
        <p>Main Container</p>
      </section>
    </Container>
  );
};

export default MainPage;

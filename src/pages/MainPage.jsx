import Container from 'components/Container';
import { Sidebar } from 'components/Sidebar';
import React from 'react';
// import { Sidebar } from 'components/Sidebar';

const MainPage = () => {
  return (
    <Container>
      <aside className="sidebar-section">
        <Sidebar />
      </aside>
      <main>
        <section className="main-section">
          <div>Main Container</div>
        </section>
      </main>
    </Container>
  );
};

export default MainPage;

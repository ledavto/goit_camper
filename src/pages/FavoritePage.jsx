import Container from 'components/Container';
import FavoriteList from 'components/FavoriteList';
import { NavBar } from 'components/NavBar';
import { Sidebar } from 'components/Sidebar';
import React from 'react';

const FavoritePage = () => {
  return (
    <Container>
      <NavBar />
      <aside className="sidebar-section">
        <Sidebar />
      </aside>
      <main>
        <section className="main-section">
          <FavoriteList />
        </section>
      </main>
    </Container>
  );
};

export default FavoritePage;

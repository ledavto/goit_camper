import Container from 'components/Container';
import { ModalProduct } from 'components/ModalProduct';
import ProductList from 'components/ProductList';
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
          <ProductList />
          {/* <ModalProduct /> */}
        </section>
      </main>
    </Container>
  );
};

export default MainPage;

import Container from 'components/Container';
import { ModalProduct } from 'components/ModalProduct';
import { ProductItem } from 'components/ProductItem';
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
          {/* <div className="main-container">
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div> */}
          <ModalProduct />
        </section>
      </main>
    </Container>
  );
};

export default MainPage;

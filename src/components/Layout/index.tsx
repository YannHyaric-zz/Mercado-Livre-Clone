import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Container, Wrapper } from "../Layout/styles";
import Product from "../Product";

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Layout;

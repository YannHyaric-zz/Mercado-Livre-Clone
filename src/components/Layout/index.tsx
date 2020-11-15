import React from "react";
import { Container, Wrapper } from "../Layout/styles";
import Product from '../Product'

const Layout: React.FC = () => {
  return (
    <Container>
      
      <Wrapper>
        <Product />
      </Wrapper>

    </Container>
  );
};
export default Layout;
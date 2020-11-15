import React from "react";
import tshirt from "../../assets/tshirt.png";
import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirt} />
          </Gallery>
          {/*<Info/>

        </Column>
          <ProductAction/>
          <SellerInfo/>
          <Warranty/>

        <Column>*/}
        </Column>
      </Panel>
    </Container>
  );
};

const Warranty = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida</p>
        <p className="description">Seu produto ou o dinheiro de volta</p>
      </span>
      <span>
        <p className="title">Garantia vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Info</h2>
    <p>
      Lorem Ipsum
      <br />
      <br />
      Itens: <br />
      Camisa <br />
    </p>
  </Description>
);

export default Product;

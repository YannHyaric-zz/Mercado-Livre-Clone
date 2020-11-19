import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>
      <Row>
        <h1>Camisa Branca</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>
      <PriceCard>
        <PriceRow>
          <span className="symbol">RS</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>
        <InstallmentsInfo>3x de R$11,33</InstallmentsInfo>
      </PriceCard>
      <StockStatus>Disponivel</StockStatus>
      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete grátis</span>
          <span className="title">Beneficio: Nenhum</span>
          <a href="#" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>
      <Actions>
        <Button solid>Comprar Agora</Button>
        <Button solid>Adicionar ao carrinho</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          <p>Compra Garantida</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;

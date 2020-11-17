import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationTermometer,
  ReputationRow,
  More,
  SuportIcon,
  ClockIcon,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações do Vendedor</Title>

      <LocationCard>
        <LocationIcon>
          <div>
            <p>Localização</p>
            <strong>Juiz de Fora</strong>
          </div>
        </LocationIcon>
      </LocationCard>

      <ReputationCard>
        <ReputationTermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationTermometer>
        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Vendas no ultimo mês</span>
          </div>
          <div>
            <strong>
              <SuportIcon />
            </strong>
            <span>Bom Atendimento</span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>Vendas no ultimo mês</span>
          </div>
        </ReputationRow>
      </ReputationCard>
      <More href="#">Ver mais Dados</More>
    </Container>
  );
};

export default SellerInfo;

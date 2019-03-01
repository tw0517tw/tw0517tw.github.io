import React from 'react';
import styled from 'styled-components';

import back from '../static/cgss/back.png';
import front from '../static/cgss/front.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  max-width: 960px;
  height: 100%;
  margin: 20px 0;
`;

function Cgss() {
  return (
    <Container>
      <Image src={front} />
      <Image src={back} />
    </Container>
  );
}

export default Cgss;

import React from 'react';
import styled from 'styled-components';

import v1Back from '../static/mltd/v1/back.png';
import v1Front from '../static/mltd/v1/front.png';
import v2Back from '../static/mltd/v2/back.png';
import v2Front from '../static/mltd/v2/front.png';

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

function Mltd() {
  return (
    <Container>
      <h2>2019-09-11 版本</h2>
      <Image src={v2Front} />
      <Image src={v2Back} />

      <h2>2018-12-10 版本</h2>
      <Image src={v1Front} />
      <Image src={v1Back} />
    </Container>
  );
}

export default Mltd;

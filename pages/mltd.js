import React from 'react';
import styled from 'styled-components';

import v1Back from '../public/mltd/v1/back.png';
import v1Front from '../public/mltd/v1/front.png';
import v2Back from '../public/mltd/v2/back.png';
import v2Front from '../public/mltd/v2/front.png';

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
      <Image src={v2Front.src} />
      <Image src={v2Back.src} />

      <h2>2018-12-10 版本</h2>
      <Image src={v1Front.src} />
      <Image src={v1Back.src} />
    </Container>
  );
}

export default Mltd;

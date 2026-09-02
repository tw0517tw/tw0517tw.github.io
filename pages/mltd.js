import Image from 'next/image';

import v1Back from '../public/mltd/v1/back.png';
import v1Front from '../public/mltd/v1/front.png';
import v2Back from '../public/mltd/v2/back.png';
import v2Front from '../public/mltd/v2/front.png';

const imageClassName = 'my-5 h-auto w-full max-w-[960px]';

function Mltd() {
  return (
    <div className="flex max-w-screen h-full flex-col items-center">
      <h2>2019-09-11 版本</h2>
      <Image className={imageClassName} src={v2Front} alt="Front cover" />
      <Image className={imageClassName} src={v2Back} alt="Back cover" />

      <h2>2018-12-10 版本</h2>
      <Image className={imageClassName} src={v1Front} alt="Front cover" />
      <Image className={imageClassName} src={v1Back} alt="Back cover" />
    </div>
  );
}

export default Mltd;

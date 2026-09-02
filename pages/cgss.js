import Image from 'next/image';

import back from '../public/cgss/back.png';
import front from '../public/cgss/front.png';

function Cgss() {
  return (
    <div className="flex max-w-screen h-full flex-col items-center">
      <Image
        className="my-5 h-auto w-full max-w-[960px]"
        src={front}
        alt="Front cover"
      />
      <Image
        className="my-5 h-auto w-full max-w-[960px]"
        src={back}
        alt="Back cover"
      />
    </div>
  );
}

export default Cgss;

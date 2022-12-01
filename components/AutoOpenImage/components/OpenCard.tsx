import React, { useEffect, useState } from 'react';

const hideCls = 'w-full h-full bg-gray-400';
const animateCls = 'animate-flip-horizontal-top';

interface types {
  idx: number;
}

function OpenCard({ idx }: types) {
  const [openCls, setOpenCls] = useState('');

  useEffect(() => {
    setTimeout(() => setOpenCls(() => animateCls), idx * 100);
  }, []);

  return <div className={`${hideCls} ${openCls}`} />;
}

export default OpenCard;

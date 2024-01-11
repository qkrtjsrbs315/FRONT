import { useEffect, useState } from 'react';

const ChangeSize = () => {
  const [x, setX] = useState(0);

  const handleClick = () => {
    setX(prevX => (prevX === 1 ? 0 : 1));
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--changeSize', `${x}`);
  }, [x]);

  return { x, handleClick };
};

export default ChangeSize;

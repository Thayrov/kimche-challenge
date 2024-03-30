import { useEffect, useRef } from 'react';
import {
  StyledBlob,
  StyledBlob1,
  StyledBlob2,
  StyledBlob3,
  StyledBlob4,
  StyledBlob5,
  StyledBlur,
  StyledDots,
} from '../styles/blob/Blob.styles';

const Blob = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      if (blobRef.current) {
        (blobRef.current as HTMLElement).style.left = `${clientX}px`;
        (blobRef.current as HTMLElement).style.top = `${clientY}px`;
      }
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);
  return (
    <>
      <StyledBlob ref={blobRef} id='blob' />
      <StyledBlur id='blur' />
      <StyledDots id='dots' />
      <StyledBlob1 />
      <StyledBlob2 />
      <StyledBlob3 />
      <StyledBlob4 />
      <StyledBlob5 />
    </>
  );
};

export default Blob;

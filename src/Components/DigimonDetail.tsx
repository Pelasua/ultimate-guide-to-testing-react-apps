import React from 'react';

interface Props {
  src?: string
  name?: string
}

function DigimonDetail({ src, name }: Props) {
  return (
    <div>
      {src && name &&
        <>
          <img src={src} alt={`${name}`} />
          <span>{name}</span>
        </>
      }
    </div>
  );
}

export default DigimonDetail;
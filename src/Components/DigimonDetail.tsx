import React from 'react';
import Spinner from './Spinner';

interface Props {
  src?: string
  name?: string,
  loading?: boolean
}

function DigimonDetail({ src, name, loading = false }: Props) {
  return (
    <div className='flex justify-center items-center gap-10'>

      {loading ? <Spinner /> : src && name &&
        <>
          <img src={src} alt={`${name}`} className='h-52' />
          <span className='text-xl underline font-semibold'>{name}</span>
        </>}


    </div>
  );
}

export default DigimonDetail;
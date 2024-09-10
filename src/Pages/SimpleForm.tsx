import Button from 'Components/Button';
import Input from 'Components/Input';
import ItemList from 'Components/ItemList';
import React from 'react';


function SimpleForm() {
  return (
    <div className='h-full flex flex-col justify-center items-center'>
      <form className='w-1/2 p-8 flex flex-col gap-8 border-solid border-2 border-blue-400 rounded-xl'>
        <h3 className='text-2xl'>Digimon search</h3>
        <Input error='hola' label='Digimon name' placeholder='Search the name...' />
        <Button type='submit'>Accept</Button>
      </form>

      <h3 className='text-xl'>History</h3>
      <ItemList data={[]} />
    </div>
  );
}

export default SimpleForm;
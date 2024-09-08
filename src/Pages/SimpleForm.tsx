import Button from 'Components/Button';
import Input from 'Components/Input';
import ItemList from 'Components/ItemList';
import React from 'react';


function SimpleForm() {
  return (
    <div>
      <h2>Digimon search</h2>
      <Input label='Digimon name' placeholder='Search the name of the Digimon...' />
      <Button>Accept</Button>

      <h3>History</h3>
      <ItemList data={[]} />
    </div>
  );
}

export default SimpleForm;
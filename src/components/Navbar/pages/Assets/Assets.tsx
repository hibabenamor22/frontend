// AssetForm.jsx
import { useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { NavbarNested } from '../../NavbarNested';

function AssetForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue); // Pass the input value to the parent component
    setInputValue(''); // Clear the input field
  };

  return (
<div className="flex flex-col flex-grow bg-white-500">
        {/* <SideBar /> */}

        <div className="flex flex-grow">
    <form onSubmit={handleSubmit}>
      <TextInput
        label="URL, Hostname, or IP Address"
        placeholder="Enter asset details"
        value={inputValue}
        onChange={(event) => setInputValue(event.currentTarget.value)}
        required
      />
      <Button type="submit">Add Asset</Button>
    </form>
  );
}

export default AssetForm;
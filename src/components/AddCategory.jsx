import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputvalue, setInputvalue] = useState('One Punch');

  const onInputChange = ({ target }) => {
    setInputvalue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const clearInputValue = inputvalue.trim();
    if (clearInputValue.length < 1) return;
    onAddCategory(clearInputValue);
    setInputvalue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gif"
        value={inputvalue}
        onChange={onInputChange}
      />
    </form>
  )
};

import React, { useState } from 'react';

function Form() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вы ввели: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default Form;

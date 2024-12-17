import React, { useState } from 'react';

function CharacterCounter() {
  const [value, setValue] = useState('');
  const maxLength = 50;

  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        placeholder="Введите текст"
      />
      <p>Осталось символов: {maxLength - value.length}</p>
    </div>
  );
}

export default CharacterCounter;
import React, { useState } from 'react';

function ToggleText() {
  const [isYes, setIsYes] = useState(true);

  return (
    <div>
      <p>{isYes ? 'Да' : 'Нет'}</p>
      <button onClick={() => setIsYes(!isYes)}>Переключить</button>
    </div>
  );
}

export default ToggleText;
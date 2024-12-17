import React, { useState } from 'react';

function DayNightToggle() {
  const [isDay, setIsDay] = useState(true);

  return (
    <div>
      <p>{isDay ? 'День' : 'Ночь'}</p>
      <button onClick={() => setIsDay(!isDay)}>Переключить</button>
    </div>
  );
}

export default DayNightToggle;
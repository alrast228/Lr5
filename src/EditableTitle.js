import React, { useState } from 'react';

function EditableTitle() {
  const [title, setTitle] = useState('автомат можно?');

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2>{title}</h2>
    </div>
  );
}

export default EditableTitle;

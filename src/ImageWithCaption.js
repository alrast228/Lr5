import React from 'react';

function ImageWithCaption(props) {
  return (
    <div>
      <img src={props.src} alt="Изображение" style={{ maxWidth: '300px' }} />
      <p>{props.caption}</p>
    </div>
  );
}

export default ImageWithCaption;
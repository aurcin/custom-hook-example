import React from 'react';

import './PictureItem.css';

const Picture = ({ url, author }) => {
  return (
    <li className='picture__container'>
      <img src={url} alt={`Posted by ${author}`} />
      <div className='author'>
        Author: <strong>{author}</strong>
      </div>
    </li>
  );
};

export default Picture;

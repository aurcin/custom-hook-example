import React, { useEffect, useState } from 'react';

import './PictureList.css';
import Picture from 'components/picture/PictureItem';

const url = 'https://picsum.photos/v2/list';

const PictureList = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(url).then(r =>
      r.json().then(res => {
        setPictures(res);
      })
    );
  }, []);

  const PictureList = pictures.map(({ id, author, download_url }) => {
    return <Picture key={id} author={author} url={download_url} />;
  });

  return (
    <>
      <h1 className='title'>Some pictures from Lorem Picsum</h1>
      <ul className='picture__list'>{PictureList}</ul>
    </>
  );
};

export default PictureList;

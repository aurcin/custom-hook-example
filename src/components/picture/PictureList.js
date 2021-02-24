import React from 'react';

import './PictureList.css';
import useData from 'hooks/useData';
import Picture from 'components/picture/PictureItem';

const PictureList = () => {
  const [pictures] = useData('https://picsum.photos/v2/list');

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

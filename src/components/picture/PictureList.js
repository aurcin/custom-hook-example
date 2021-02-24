import React from 'react';

import './PictureList.css';
import Picture from 'components/picture/PictureItem';

const PictureList = ({ pictures }) => {
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

PictureList.defaultProps = {
  pictures: [
    {
      id: '0',
      author: 'Alejandro Escamilla',
      width: 5616,
      height: 3744,
      url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
      download_url: 'https://picsum.photos/id/0/5616/3744',
    },
    {
      id: '1',
      author: 'Alejandro Escamilla',
      width: 5616,
      height: 3744,
      url: 'https://unsplash.com/photos/LNRyGwIJr5c',
      download_url: 'https://picsum.photos/id/1/5616/3744',
    },
    {
      id: '10',
      author: 'Paul Jarvis',
      width: 2500,
      height: 1667,
      url: 'https://unsplash.com/photos/6J--NXulQCs',
      download_url: 'https://picsum.photos/id/10/2500/1667',
    },
    {
      id: '100',
      author: 'Tina Rataj',
      width: 2500,
      height: 1656,
      url: 'https://unsplash.com/photos/pwaaqfoMibI',
      download_url: 'https://picsum.photos/id/100/2500/1656',
    },
    {
      id: '1000',
      author: 'Lukas Budimaier',
      width: 5626,
      height: 3635,
      url: 'https://unsplash.com/photos/6cY-FvMlmkQ',
      download_url: 'https://picsum.photos/id/1000/5626/3635',
    },
  ],
};

export default PictureList;

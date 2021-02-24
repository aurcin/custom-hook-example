import React, { useState, useEffect } from 'react';

import PictureList from 'components/picture/PictureList';

const url = 'https://picsum.photos/v2/list';

const PictureDataContainer = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(url).then(r =>
      r.json().then(res => {
        setPictures(res);
      })
    );
  }, []);

  return <PictureList pictures={pictures} />;
};

export default PictureDataContainer;

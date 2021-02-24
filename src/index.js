import React from 'react';
import ReactDOM from 'react-dom';

import PictureList from 'components/picture/PictureDataContainer';

const App = () => {
  return (
    <>
      <PictureList />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

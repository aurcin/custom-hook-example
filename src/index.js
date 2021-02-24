import React from 'react';
import ReactDOM from 'react-dom';

import PictureList from 'components/picture/PictureList';

const App = () => {
  return (
    <>
      <PictureList />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

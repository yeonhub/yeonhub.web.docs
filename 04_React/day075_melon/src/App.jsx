import React from 'react';
import Melon from './components/melon/Melon';
import GlobalStyle from './components/styled/Global';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Melon />
    </div>
  );
};

export default App;
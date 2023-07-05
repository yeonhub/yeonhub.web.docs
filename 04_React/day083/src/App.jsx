import React from 'react';
import Color from './components/color/Color';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import Count from './components/counter/Count';

const App = () => {
  return (
    <div>
      <ColorProvider>
        <Color /> 
      </ColorProvider>
      
      <CountProvider>
        <Count /> 
      </CountProvider>
    </div>
  );
};

export default App;
import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import ChangeColorProvider from './contexts/ChangeColorContext';
import Cnt from './components/counter/Cnt';
import CntProvider from './contexts/CntContext';
import Counter from './components/counter/Counter';
import CounterProvider from './contexts/CounterContext';
import Play from './components/active/Play';
import PlayProvider from './contexts/PlayContext';
import Todos from './todos/Todos';
import TodosProvider from './contexts/TodosContext';
import './assets/css/reset.css'

const App = () => {
  return (
    <div style={{margin:30}}>
      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>
      <hr />
      <CntProvider>
        <Cnt />
      </CntProvider>
      <hr />
      <CounterProvider>
        <Counter />
      </CounterProvider>
      <hr />
      <PlayProvider>
        <Play />
      </PlayProvider>
      <hr />
      <TodosProvider>
        <Todos />
      </TodosProvider>
    </div>
  );
};

export default App;
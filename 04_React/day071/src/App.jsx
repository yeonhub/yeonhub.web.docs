import React from 'react';
import './assets/css/reset.css'
import Starbucks from './starbucks/Starbucks';
import Acc from './sample3/Acc';
import Tab from './sample2/Tab';
// import Test1 from './sample/Test1';

const App = () => {
  return (
    <div>
      {/* <Test1/> */}
      {/* <Tab/> */}
      <Acc/>
      <Starbucks/>
    </div>
  );
};

export default App;
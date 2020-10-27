import React from 'react';
import ReactDOM from 'react-dom';
import useResize from '../src/index.js';
import Slider from './Slider/Slider.js';

const App = () => {
  const reSize = useResize()
  console.log("resize", reSize)
  return <Slider><div></div> <div></div><div></div><div></div><div></div></Slider> 
}

ReactDOM.render(<App/>, document.querySelector('#root'));

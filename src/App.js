
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './components/Textform';

import './components/common.css';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const[mode , setMode]=useState('light');
  // const[greenMode , setGreenMode]=useState('light');
  // const[blueMode , setBlueMode]=useState('light');
  const[text , setText]=useState('dark mode');
const toggleMode=()=>{
  if(mode==="light"){
    setMode('dark');
    // setGreenMode('success');
    // setBlueMode('primary');
    setText('Light Mode');
    document.body.style.backgroundColor='#916271';
    
  }
  else{
    setMode('light');
    // setGreenMode('light');
    // setBlueMode('light');
    setText('Dark Mode');
    document.body.style.backgroundColor='white';
  }
}


  return (
    <>
   
      <div className="box">
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} textMode={text} />
  <TextForm  heading="Enter your Text Here" mode={mode}/>
  </div>
  </>
  );

}

export default App;

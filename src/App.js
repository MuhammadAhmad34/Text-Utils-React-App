import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, Setmode] = useState("light")
  const ToggleMode = ()=>{
    if(mode === 'light'){
      Setmode('dark')
      document.body.style.backgroundColor = '#212529'
    }else{
      Setmode('light')
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
    <>
      <Navbar title="TextUtils" AboutText="About TextUtils" Mode={mode} ToggleMode={ToggleMode}/>
      <div className='container'>
        <TextForm Heading="Enter Text to analyze" Mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

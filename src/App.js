import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, Setmode] = useState("light")
  const [alert, setAlert] = useState(null)
  const ShowAlert = (message, AlertType)=>{
    setAlert({
      message:message,
      type:AlertType
    })
    setTimeout(()=>{
      setAlert(null)
    }, 3000)
  }
  const ToggleMode = ()=>{
    if(mode === 'light'){
      Setmode('dark')
      document.body.style.backgroundColor = '#212529'
      ShowAlert("Dark Mode has been enabled.", "success")

    }else{
      Setmode('light')
      document.body.style.backgroundColor = 'white'
      ShowAlert("light Mode has been enabled.", "success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" AboutText="About TextUtils" Mode={mode} ToggleMode={ToggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm Heading="Enter Text to analyze" Mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

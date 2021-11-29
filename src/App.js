import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
    const [mode,setMode]=useState('light');//whether dark mode is enable or not
    const [alert, setAlert] = useState(null);

    const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  
    const toggleMode =()=>{
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor='#0d285e';
        showAlert("Dark mode has been enabled","success");
        document.title= 'TextUtils - Dark Mode';
      }
      else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title= 'TextUtils - Light Mode';

      }
    }
  return (<>
  <Router> 
<Navbar title="TextUtils" about="about" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        {/* if we not use exact keyword then react will render the 1 st component even we want to render the 2nd component
       { /users -->component 1
      /users/about } --> component 2 */}

                <Route exact path="/about" element={<About/>}>
                </Route>
                <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>}>
                </Route>
        </Routes>
    </div>
    </Router>
</>
  );
}

export default App;

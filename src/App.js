import About from "./components/About"
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React ,{useState} from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enabled or not.
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#091153'
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")

    }
  }
    const [alert, setAlert] = useState(null);
    const showAlert=(message,type)=>{
      setAlert({msg:message,
      type: type})
      setTimeout(()=>{
        setAlert(null);
      },1500);
    }
  return (
    <>
        <Router>
        {/* <Link to="/about">About</Link> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">

        <Routes>
          {/* exact used for proper matching of url (always a good idea) */}
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode} />}/>
              
        </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;

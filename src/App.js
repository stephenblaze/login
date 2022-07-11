import './App.css';
import { BrowserRouter } from "react-router-dom";
import SignUp from './components/SignUp'
import Login from './components/Login';
import { Routes, Route, Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
  
  <>
<Routes>
<Route exact path="/" element={<Login/>} />  

<Route exact path="/signup" element={<SignUp/>} />

</Routes>
    {/* <Login/>
    <SignUp/> */}
    <div><Toaster/></div>
    </>
  );
}

export default App;

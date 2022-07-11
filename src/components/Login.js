import React from 'react'
import '../App.css' 
import { useEffect , useState} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'

const Login = () => {
  const BASEURL = 'https://authentication-test-drive.herokuapp.co/api/v1/auth/login'
  const [loading, setLoading] = useState(null);  
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(null);
  
  const fetchData = async (formData) => {
    try {
      const res = await axios.post(BASEURL, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      toast.success("successful")
    }
     catch (error) {
      setError(error.response.data.message)
      console.log(error.response.data.message);      
    }
  }
  
  
  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data, // spread operator
      [e.target.name]: e.target.value // computed property
    })
  }


const handleSubmit = (e) => {
  e.preventDefault();
  // if (loading) return "Loading...";
  // if (Error) return "Error!";
  fetchData(data)
}
  return (
    <div>
    <div className="App">
      <div className="content"></div>
        <div className="log"><h1>Login</h1></div>
        <div className="line">
        <form >
          <div  className="password">  <label>Email Address or Phone Number</label></div>
          <div className="break"><br /></div>
          
          <input name='email' onChange={handleChange} required/>
          <br />
          <div className="password"> <label>Password <a href="/">forgot password?</a></label></div>
          <div className="break"><br /></div> 
          <input onChange={handleChange}
          type="text" name="password" placeholder="Enter Password"
          required    
          />
          <br />
          <button onClick={handleSubmit} className="btn">Login</button>
          <br />
          <br />
          
          <div className="dont"><span>
<a href='/signup'>

          Don't have an Account?

</a>

          </span></div>
          <div className="break2"><br /></div>
        
          {/* <button className="create_account">Create an Account</button> */}
        </form>


    </div>
    </div>
    </div>
  )
}

export default Login;
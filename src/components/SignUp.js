import React from 'react'
import { useEffect , useState} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios';


const SignUp = () => {
  const BASEURL = 'https://authentication-test-drive.herokuapp.com/api/v1/auth/signup'
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    email: ''
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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    fetchData(data) 

  }

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data, // spread operator
      [e.target.name]: e.target.value // computed property hjhh
    })
  }

  return (

<div>
    <div className="App">
      <div className="content"></div>
        <div className="log"><h1>Create An Account</h1></div>
        <div className="line">
        <form>
          <div  className="password">  <label>First Name</label></div>
          <div className="break"><br /></div>
          
          <input 
           onChange={handleChange}
          type="text" name="firstName" placeholder="Enter First Name"
          required
          />
          <br /><div  className="password">  <label>Last Name</label></div>
          <div className="break"><br /></div>
          
          <input 
          onChange={handleChange}
          type="text" name="lastName" placeholder="Enter Last Name"
          required></input>

<div  className="password">  <label>Email Address</label></div>
          <div className="break"><br /></div>
          
          <input 
           onChange={handleChange}
          type="text" name="email" placeholder="Enter Email Address"
          required
          />

<div  className="password">  <label>Phone Number</label></div>
          <div className="break"><br /></div>
          
          <input 
           onChange={handleChange}
          type="text" name="phoneNumber" placeholder="Enter Phone Number"
          required
          />

<div  className="password">  <label>Password</label></div>
          <div className="break"><br /></div>
          
          <input 
                     onChange={handleChange}

          type="text" name="password" placeholder="Enter Password"
          required
          />
          
          <div className="treat"><span>By signing up you accept our <span></span><a href="/" className="terms">terms and conditions  &#38; privacy policy</a></span></div>

          <br />
          <button onClick={handleSubmit} className="btn">Create an Account</button>
          <br />
          <br />
          
          <div className="dont"><span>

          Already have an Account?

          </span></div>
          <div className="break2"><br /></div>
        
          <button className="create_account">Create an Account</button>
        </form>

        </div>
        </div>
        </div>
  )
  }

export default SignUp;
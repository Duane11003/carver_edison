import React, {useState} from 'react'
import { GoogleLogin } from 'react-google-login';
import Home from './Home'



function SignIn () {
    
    const [auth, setAuth] = useState(false)
    const [name, setName] = useState("")
    
    const responseGoogle = (response) => {
        setName(response.profileObj.givenName)
        setAuth(true)
    }

  return (
    <div>

        {auth === false ? 
            <GoogleLogin
                clientId="429893697136-cn97dq9et8s9tnu3j707ovtdrk6c6qme.apps.googleusercontent.com"
                buttonText="Sign in With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            : null
        }
    
        {auth === true ? <Home name={name}/> : null}
    
  </div>
  )
}

export default SignIn
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useLocation, useNavigate } from 'react-router-dom'


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {setUser, user, login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const redirectLocation = location.state?.path || '/'

  const handleLogin = (e) => {
  
    // login({email, password})
    setUser({
      email,
      password
    })

    setEmail("")
    setPassword("")
    navigate(redirectLocation, {replace: true})
  }

  // if(user){
  //   window.location.replace("/")
  // }

  useEffect( ()=>{
    console.log(user, email, password);
    // if(user){
    //   window.location.replace("/")
    // }
  },[user])

  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  // type="email"
                  value={email}
                  onChange={ (e)=> setEmail(e.target.value) }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a> */}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={ (e)=> setPassword(e.target.value) }
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                // type="submit"
                onClick={ handleLogin }
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{''}
          </p>
        </div>
        </div>
    </>

  )
}

export default Login